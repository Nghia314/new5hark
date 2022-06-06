import React from "react";

import Security from "../utils/security";
import { getUserData } from "../utils/API";
import Button from "../components/Button";

function UserActivities({ userActivities }) {
  console.log(userActivities);
  console.log(userActivities[0]);
  // const activity = userActivities[0];
  function itWorks() {
    console.log("it works");
  }
  return (
    <div>
      <h1 className="mb-3">BOOPY's Activities</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* <Button activity={"something"} color={"primary"} /> */}
        {userActivities.map((activity) => (
          <Button
            activity={activity.name}
            key={activity._id}
            color={"secondary"}
            onClick={itWorks}
          />
        ))}
      </div>
    </div>
  );
}

export default UserActivities;
