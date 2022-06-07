import React from "react";
import Chart from "../components/Chart"
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function YourDay() {
  console.log("This is what you're sending over");
  const location = useLocation();
  const { from } = location.state;

  console.log(from);
  return (
    <>
    <Navbar />
      <div className="grid md:grid-rows-2-md md:grid-flow-col m-3 gap-3">
        <div className="card bg-neutral text-center">
          <h2 className="card-header text-neutral p-3 bg-primary">Today</h2>
          <div className="p-3 grid-flow-col">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-3">
              {/* <div className="input-group w-full">
                <button className="btn btn-primary btn-sm w-full text-xl">Walk</button>
                <input className="checkbox checkbox-primary checkbox-lg" type="checkbox"/>
              </div> */}
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
              <div className="btn btn-outline btn-primary w-full text-xl truncate">Walk</div>
            </div>
            <div className="p-3">
              <h3 className="text-4xl">You've done</h3>
              <h1 className="text-6xl text-primary">3</h1>
              <h3 className="text-4xl">Activities today!</h3>
            </div>
            <button className="btn btn-primary w-full grid-end-auto">End Day</button>
          </div>
        </div>
        <div className="card bg-neutral text-center">
          <h2 className="card-header text-neutral p-3 bg-secondary">Your Stats</h2>
          <div className="p-3">
            <h2>Monthly Stats</h2>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}

export default YourDay;
