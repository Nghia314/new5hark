import React from "react";

function Button({ onClick, color, activity }) {
  return (
    // <div className="tooltip" datatip={activity.description}>
    <button onClick={onClick} className={`btn btn-${color} w-full`}>
      <p className="line-clamp-2">
        {activity}
      </p>
    </button>
    // </div>
  );
}

export default Button;
