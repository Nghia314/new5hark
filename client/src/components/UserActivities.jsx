import React from "react";

//import components
import Button from "../components/Button";

function UserActivities({
  userActivities,
  handleMoveToMyDay,
  handleDelete,
  deleteState,
}) {
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
  let color;
  if (deleteState) {
    color = "error";
    return (
      <div>
        <h1 className="mb-3">Your Created Activities</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {userActivities.map((activity) => (
            <Button
              activity={activity}
              key={activity._id}
              color={color}
              handleMoveToMyDay={handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
  color = "warning";
  return (
    <div>
      <h1 className="mb-3">Your Created Activities</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {userActivities.map((activity) => (
          <Button
            activity={activity}
            key={activity._id}
            color={color}
            handleMoveToMyDay={handleMoveToMyDay}
          />
        ))}
      </div>
    </div>
  );
}

export default UserActivities;
