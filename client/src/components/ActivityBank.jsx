import React from "react";

import Button from "./Button.jsx";
// take in array of objects from the fetch from all activities
// map through, creating a button for each one,
// <Button {activity}, including the color/>
function ActivityBank() {
  return (
    <div>
      <div className="card max-w-3xl p-3">
        <div className="card-body border-solid border-2 border-sky-800 bg-slate-800  rounded">
          <h2 className="text-center text-3xl font-bold">
            Monthly Chart Summary
          </h2>
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default ActivityBank;
