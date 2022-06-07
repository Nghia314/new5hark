import React from "react";

//import components
import Button from "../components/Button";

function UserActivities({ userActivities }) {
  if (userActivities.length === 0) {
    return (
      <div>
        <h1 className="mb-3">Your Created Activities</h1>
        <div>
          <h1 className="text-3xl">You haven't made any activities yet</h1>
          <h1 className="text-xl">Fill out the form to add an activity</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="mb-3">Your Created Activities</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* <Button activity={"something"} color={"primary"} /> */}
        {userActivities.map((activity) => (
          <Button
            activity={activity.name}
            key={activity._id}
            color={"secondary"}
          />
        ))}
      </div>
    </div>
  );
}

export default UserActivities;
