import React from "react";

function ActivitiesDoneToday({ activities }) {
  return (
    <div className="p-3">
      <h3 className="text-4xl">You've done</h3>
      <h1 className="text-6xl text-primary">3</h1>
      <h3 className="text-4xl">Activities today!</h3>
    </div>
  );
}

export default ActivitiesDoneToday;
