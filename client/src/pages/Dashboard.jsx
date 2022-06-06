// import hooks
import React, { useState, useEffect } from "react";

// import utils
import Security from "../utils/security";
import {
  fetchAllActivities,
  createActivity,
  // createAchievement,
  getUserData,
} from "../utils/API";

//import components
import ActivityBank from "../components/ActivityBank";
import UserActivities from "../components/UserActivities";

function Dashboard() {
  // state for activities to be added to the my day box
  // will eventually get passed into the myDay Component
  const [selectedActivities, setSelected] = useState([]);

  // state for handling the new activity form
  const [newActivityFormState, setNewActivityForm] = useState({
    name: "",
    description: "",
  });

  const [communityActivities, setCommunityActivities] = useState([]);

  // array for populating the user activities section

  // happens on page load, but may need to also happen when userActivities change
  useEffect(() => {
    const communityDataFetch = async () => {
      try {
        const res = await fetchAllActivities();

        if (!res.ok) {
          alert("Something went wrong with fetching all activities");
        }

        const data = await res.json();
        // console.log(data);
        setCommunityActivities(data);
      } catch (err) {
        alert("Something went wrong with the communityDataFetch");
      }
    };

    communityDataFetch();
  }, []);

  // const handleNewActivityForm = async (e) => {
  //   e.preventDefault();
  //   const token = Security.loggedIn() ? Security.getToken() : null;
  //   if (!token) {
  //     return false;
  //   }
  //
  //   try {
  //     const res = await createActivity(newActivityFormState, token);
  //     if (!res.ok) {
  //       throw new Error("Something Went Wrong");
  //     }
  //     const newActivity = await res.json();
  //     setUserActivities(newActivity);
  //   } catch (err) {
  //     alert("Something Went Wrong");
  //   }
  // };
  return (
    <>
      <div className="grid md:grid-rows-2-md md:grid-flow-col m-3 gap-3 text-center">
        <div className="card md:col-span-8 bg-neutral w-full p-3 text-center">
          <h2 className="card-header text-3xl font-bold">Build your Day</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {/* comment */}
            {/* this should be the user activities component, being passed userActivities stateful value */}
            <UserActivities />
            {/* create activity form */}
            <div>
              <h1 className="mb-3">Create Activity</h1>
              {/* <Form / handleNewActivityForm></Form> */}
              <form>
                <div className="input-group">
                  <input
                    className="input input-primary input-bordered w-full"
                    type="text"
                  />
                  <button type="submit" className="btn btn-primary font-bold">
                    +
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card bg-base-100 mt-3">
            <h2 className="card-header text-neutral p-3 bg-secondary">
              Activity Bank
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 p-3 gap-3">
              {/* activities.map((activity) => { */}
              {/*   <Button / props> */}
              {/* }) */}
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
              <button className="btn btn-default b w-full truncate">
                Walk
              </button>
            </div>
          </div>
          {/* end of communty activity div  */}
        </div>
        {/* end of left side of page */}

        {/* begin right side */}
        <div className="card md:col-span-4 bg-neutral w-full p-3">
          <h2 className="card-title">My Day</h2>
          <div className="grid grid-cols-2 gap-3 my-3">
            {/* MOCK BUTTON DATA, DELETE LATER */}
            <button className="btn btn-secondary w-full truncate">Walk</button>
            <button className="btn btn-secondary w-full truncate">Walk</button>
            <button className="btn btn-secondary w-full truncate">Walk</button>
            <button className="btn btn-secondary w-full truncate">Walk</button>
            <button className="btn btn-secondary w-full truncate">Walk</button>
            <button className="btn btn-secondary w-full truncate">Walk</button>
            <button className="btn btn-secondary w-full truncate">Walk</button>
            {/* MOCK BUTTON DATA, DELETE LATER */}
          </div>
          <button className="btn btn-primary">Start my Day!</button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
