import React from "react";

function YourDay() {
  return (
    <>
      <div className="grid md:grid-rows-2-md md:grid-flow-col m-3 gap-3">
        <div className="card bg-neutral p-3 text-center">
          <h2>Today</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-3">
            {/* <div className="input-group w-full">
              <button className="btn btn-primary btn-sm w-full text-xl">Walk</button>
              <input className="checkbox checkbox-primary checkbox-lg" type="checkbox"/>
            </div> */}
            <label className="swap">
              <input type="checkbox"/>
                <div className="swap-off btn btn-outline btn-primary btn-sm w-full text-xl">Walk</div>
                <div className="swap-on btn btn-primary btn-sm w-full text-xl">Walk</div>
            </label>
          </div>
        </div>
        <div className="card bg-neutral p-3 text-center">
          <h2>Your Stats</h2>
        </div>
      </div>
    </>
  );
}

export default YourDay;
