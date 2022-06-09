import React from "react";
import Chart from "../components/Chart"
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import YourDayActivities from "../components/YourDayActivities";
import ActivitiesDoneToday from "../components/ActivitiesDoneToday";
import Button from "../components/Button";


function YourDay({myDayActivities}) {
console.log("This is what you're sending over");
  const location = useLocation();
  const { from } = location.state || {};
  const END_DAY = { name: "End Day" };

  console.log(from);
  return (
    <>
    <Navbar />
      <div className="grid md:grid-rows-2-md md:grid-flow-col m-3 gap-3">
        <div className="card bg-neutral text-center"> 
          <h2 className="card-header text-neutral p-3 bg-primary">Today</h2>
          <div className="p-3 grid-flow-col">
            <YourDayActivities />
            <ActivitiesDoneToday />
            <Button 
              color="primary" 
              activity={END_DAY}
            />
          </div>
        </div>
        <div className="card bg-neutral text-center">
          <h2 className="card-header text-neutral p-3 bg-secondary">Your Stats</h2>
          <div className="p-3">
            <h2>Monthly Stats</h2>
            <Chart
              counterState={counterState}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default YourDay;
