import React, { useEffect } from "react";
import { fetchAllActivities } from "../utils/API.js";

import Button from "./Button.jsx";
// take in array of objects from the fetch from all activities
// map through, creating a button for each one,
// <Button {activity}, including the color/>
function ActivityBank({ communityActivities }) {
  useEffect(() => {
    const getAllActivities = async () => {
      try {
        const res = await fetchAllActivities();
        return res;
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
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
          <button className="btn btn-default w-full truncate">Walk</button>
        </div>
      </div>
    </>
  );
}

export default ActivityBank;
