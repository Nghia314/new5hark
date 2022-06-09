import React from "react";

function ActivitiesDoneToday({ clickCount }) {
  return (
    <div className="p-3">
      <h3 className="text-4xl">You've done</h3>
      <h1 className="text-6xl text-primary">{clickCount}</h1>
      <h3 className="text-4xl">Activities today!</h3>
    </div>
  );
}

export default ActivitiesDoneToday;
