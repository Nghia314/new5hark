// import hooks
import React, { useState, useEffect } from "react";

// import utils
import Security from "../utils/security";
import {
  fetchAllActivities,
  getUserData,
  createActivity,
  deleteUserActivity,
} from "../utils/API";

//import components
import Navbar from "../components/Navbar";
import ActivityBank from "../components/ActivityBank";
import UserActivities from "../components/UserActivities";
import CreateActivityForm from "../components/CreateActivityForm";
import MyDay from "../components/MyDay";

function Dashboard() {
  // state for activities to be added to the my day box
  // passed into the myDay Component
  const [myDayActivities, setMyDayActivities] = useState([]);

  // state for all activities fetch
  // passed to ActivityBank
  const [allActivities, setAllActivities] = useState([]);

  // state for all user activities
  // passed to UserActivities
  const [userActivities, setUserActivities] = useState([]);

  // newactivity form state
  // passed to createActivity
  const [formState, setForm] = useState({});

  // delete state
  // passed to CreateActivityForm
  const [deleteState, setDeleteState] = useState(false);

  // handlers for forms and buttons
  const handleFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = Security.loggedIn() ? Security.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      const res = await createActivity(formState, token);
      if (!res.ok) {
        alert("something went wrong while creating activity");
      }
      const newAct = await res.json();

      // reset's state on page after updating database
      setUserActivities([newAct, ...userActivities]);
      setAllActivities([newAct, ...allActivities]);
    } catch (err) {
      alert("Something went wrong with whole function");
    }
  };

  const handleMoveToMyDay = (newAct) => {
    if (!myDayActivities.includes(newAct)) {
      setMyDayActivities([newAct, ...myDayActivities]);
    } else {
      alert("You can only add an activity once!");
    }
  };

  const handleDelete = async (act) => {
    const token = Security.loggedIn() ? Security.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      // deleting from database
      const res = await deleteUserActivity({ _id: act._id }, token);
      if (!res.ok) {
        alert("something went wrong with deleting from database");
      }

      // filter through current state, removing clicked activity
      const updatedUserActs = userActivities.filter(
        (activity) => activity._id !== act._id
      );
      const updatedAllActs = allActivities.filter(
        (activity) => activity._id !== act._id
      );

      // updating states with filtered activities
      setUserActivities(updatedUserActs);
      setAllActivities(updatedAllActs);
    } catch (err) {
      alert(
        "Something went wrong with something went wrong with whole handleDelete"
      );
    }
  };

  const handleDeleteState = () => {
    setDeleteState(!deleteState);
  };

  // happens on page load, but may need to also happen when userActivities change
  useEffect(() => {
    // gets all users's activities
    const allDataFetch = async () => {
      try {
        const res = await fetchAllActivities();

        if (!res.ok) {
          alert("Something went wrong with fetching all activities");
        }

        const data = await res.json();
        setAllActivities(data);
      } catch (err) {
        alert("Something went wrong with the communityDataFetch");
      }
    };

    // gets current user's activities
    const userDataFetch = async () => {
      try {
        const token = Security.loggedIn() ? Security.getToken() : null;

        if (!token) {
          alert("something went wrong with the token");
          return false;
        }

        const res = await getUserData(token);

        if (!res.ok) {
          alert("Something Went Wrong with getting user data");
        }

        const data = await res.json();
        // console.log(data.user.createdActivities);
        setUserActivities(data.user.createdActivities);
      } catch (err) {
        alert("Something Went Wrong with the userdatafetch function");
      }
    };

    allDataFetch();
    userDataFetch();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid md:grid-rows-2-md md:grid-flow-col m-3 gap-3 text-center">
        <div className="card md:col-span-8 bg-neutral w-full p-3 text-center">
          <h2 className="card-header text-3xl font-bold mb-3">Build your Day</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <UserActivities
              className="md:col-span-8"
              userActivities={userActivities}
              handleMoveToMyDay={handleMoveToMyDay}
              handleDelete={handleDelete}
              deleteState={deleteState}
            />
            <CreateActivityForm
              handleFormChange={handleFormChange}
              handleFormSubmit={handleFormSubmit}
              handleDeleteState={handleDeleteState}
              className="md:col-span-4"
            />
          </div>
          <ActivityBank
            allActivities={allActivities}
            handleMoveToMyDay={handleMoveToMyDay}
          />
        </div>
        <div className="md:col-span-4">
          <MyDay myDayActivities={myDayActivities} />
        </div>
      </div>
      <button className="btn btn-secondary hidden"></button> 
      <button className="btn btn-primary hidden"></button> 
      <button className="btn btn-warning hidden"></button> 
    </>
  );
}

export default Dashboard;
