import React from "react";

function Button({ color, activity, handleMoveToMyDay }) {
  return (
    <button onClick={onClick} className={`btn btn-${color} w-full`}>
      <p className="line-clamp-2">
      {activity.name}
      </p>
    </button>
  );
}

export default Button;
