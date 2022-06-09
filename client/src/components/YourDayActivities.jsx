import React from "react";
import YourDayButton from "../components/YourDayButton";

function YourDayActivities({ activities, handleCounting }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-3">
      {activities.map((activity) => (
        <YourDayButton
          key={activity._id}
          activity={activity}
          handleCounting={handleCounting}
          color={"warning"}
        />
      ))}
    </div>
  );
}

export default YourDayActivities;
