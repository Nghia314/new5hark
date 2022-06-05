import React from "react";

function Dashboard() {
  return (
    <>
    <div className="grid md:grid-rows-2-md md:grid-flow-col m-3 gap-3 text-center">
      <div className="card md:col-span-8 bg-neutral w-full p-3 text-center">
        <h2 className="card-title">Build your Day</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <h1 className="mb-3">Sid's Activities</h1>
            <div className="grid md:grid-cols-2 gap-3">
              <button className="btn bg-base-100 w-full truncate">Walk</button>
              <button className="btn bg-base-100 w-full truncate">Walk</button>
              <button className="btn bg-base-100 w-full truncate">Walk</button>
            </div>
          </div>
          <div >

          </div>
        </div>
      </div>
      <div className="card md:col-span-4 bg-neutral w-full p-3">
        <h2 className="card-title">My Day</h2>
        <div className="grid md:grid-cols-2 gap-3 my-3">
          <button className="btn btn-secondary w-full truncate">Walk</button>
          <button className="btn btn-secondary w-full truncate">Walk</button>
          <button className="btn btn-secondary w-full truncate">Walk</button>
          <button className="btn btn-secondary w-full truncate">Walk</button>
          <button className="btn btn-secondary w-full truncate">Walk</button>
          <button className="btn btn-secondary w-full truncate">Walk</button>
          <button className="btn btn-secondary w-full truncate">Walk</button>
        </div>
        <button className="btn btn-primary">Start my Day!</button>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
