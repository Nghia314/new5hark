import React from "react";

function MyDay({ myDay }) {
  return (
    <div className="card md:col-span-4 bg-neutral w-full p-3">
      <h2 className="card-title">My Day</h2>
      <div className="grid grid-cols-2 gap-3 my-3">
        {/* MOCK BUTTON DATA, DELETE LATER */}
        <button className="btn btn-secondary w-full truncate">Walk</button>
        <button className="btn btn-secondary w-full truncate">Walk</button>
        <button className="btn btn-secondary w-full truncate">Walk</button>
        <button className="btn btn-secondary w-full truncate">Walk</button>
        <button className="btn btn-secondary w-full truncate">Walk</button>
        <button className="btn btn-secondary w-full truncate">Walk</button>
        <button className="btn btn-secondary w-full truncate">Walk</button>
        {/* MOCK BUTTON DATA, DELETE LATER */}
      </div>
      <button className="btn btn-primary">Start my Day!</button>
    </div>
  );
}

export default MyDay;
