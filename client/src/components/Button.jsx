import React from "react";

function Button({ onClick, color, activity, handleMoveToMyDay }) {
  return (
    // <div className="tooltip" datatip={activity.description}>
    <button onClick={handleMoveToMyDay} className={`btn btn-${color} w-full truncate`}>
      {activity.name}
    </button>
    // </div>
  );
}

export default Button;
