import React from "react";

//universal button component
function Button({ color, activity, handleMoveToMyDay }) {
  return (
    <button
      onClick={() => handleMoveToMyDay(activity)}
      className={`btn btn-${color} w-full`}
    >
      <p className="line-clamp-2">{activity.name}</p>
    </button>
  );
}

export default Button;
