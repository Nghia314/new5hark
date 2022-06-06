import React from "react";

function Button({ key, onClick, color, activity }) {
  return (
    // <div className="tooltip" datatip={activity.description}>
    <>
      <button
        key={key}
        onClick={onClick}
        className={`btn btn-${color} w-full truncate`}
      >
        {activity}
      </button>
    </>
    // </div>
  );
}

export default Button;
