import React, { useEffect, useState } from "react";
import { fetchAllActivities } from "../utils/API.js";

import Button from "./Button.jsx";
// take in array of objects from the fetch from all activities
// map through, creating a button for each one,
// <Button {activity}, including the color/>
function ActivityBank() {
  const [allActivities, setAllActivities] = useState([]);

  useEffect(() => {
    const getAllActivities = async () => {
      try {
        const res = await fetchAllActivities();
        const data = await res.json();
        setAllActivities(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllActivities();
  }, []);

  return (
    <>
      <div className="card bg-base-100 mt-3">
        <h2 className="card-header text-center text-neutral p-3 bg-secondary">
          Activity Bank
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 p-3 gap-3">
          {allActivities.map((activity) => (
            <Button
              activity={activity.name}
              key={activity._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ActivityBank;
