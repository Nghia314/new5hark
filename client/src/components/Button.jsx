import React from "react";

function Button({ color, activity, handleMoveToMyDay }) {
  return (
    // <div className="tooltip" datatip={activity.description}>
    <button
      onClick={() => handleMoveToMyDay(activity)}
      className={`btn btn-${color} w-full truncate`}
    >
      {activity.name}
    </button>
    // </div>
  );
}

export default Button;
