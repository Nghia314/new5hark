import React from "react";

function YourDayButton({ color, activity, handleCounting }) {
  return (
    <button
      onClick={() => handleCounting(activity)}
      className={`btn btn-${color} w-full`}
    >
      <p className="line-clamp-2">{activity.name}</p>
    </button>
  );
}

export default YourDayButton;
