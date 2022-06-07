// import hooks
import React, { useState, useEffect } from "react";

// import utils
import Security from "../utils/security";
import {
  fetchAllActivities,
  getUserData,
  createActivity,
  createAchievement,
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
  const [formState, setForm] = useState({});

  // handlers for forms and bettons
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
      // console.log(newAct);
      setUserActivities([newAct, ...userActivities]);
      setAllActivities([newAct, ...allActivities]);
    } catch (err) {
      alert("Something went wrong with whole function");
    }
  };

  const handleMoveToMyDay = (newAct) => {
    // console.log("click");
    if (!myDayActivities.includes(newAct)) {
      setMyDayActivities([newAct, ...myDayActivities]);
    } else {
      alert("You can only add an activity once!");
    }
  };

  const handleStartMyDay = async () => {
    console.log("click");
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
          <h2 className="card-header text-3xl font-bold">Build your Day</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <UserActivities
              className="md:col-span-8"
              userActivities={userActivities}
              handleMoveToMyDay={handleMoveToMyDay}
            />
            <CreateActivityForm
              handleFormChange={handleFormChange}
              handleFormSubmit={handleFormSubmit}
              className="md:col-span-4"
            />
          </div>
          <ActivityBank
            allActivities={allActivities}
            handleMoveToMyDay={handleMoveToMyDay}
          />
        </div>
        <div className="md:col-span-4">
          <MyDay
            myDayActivities={myDayActivities}
            handleStartMyDay={handleStartMyDay}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
