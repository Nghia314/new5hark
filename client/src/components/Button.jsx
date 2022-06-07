import React from "react";

function Button({ onClick, color, activity }) {
  return (
    // <div className="tooltip" datatip={activity.description}>
    <button onClick={onClick} className={`btn btn-${color} w-full truncate`}>
      {activity}
    </button>
    // </div>
  );
}

export default Button;
