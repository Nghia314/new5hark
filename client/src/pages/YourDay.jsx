import React, { useState, useEffect } from "react";
import Chart from "../components/Chart";
import Navbar from "../components/Navbar";
import { useLocation, Link } from "react-router-dom";
import YourDayActivities from "../components/YourDayActivities";
import ActivitiesDoneToday from "../components/ActivitiesDoneToday";
import Button from "../components/Button";

function YourDay({ myDayActivities }) {
  // necessary to grab from last location
  const location = useLocation();
  // importing activities from last page
  const { from } = location.state || {};
  const END_DAY = { name: "End Day" };

  const [counterState, setCounter] = useState({});
  const [clickCount, setClickCount] = useState(0);

  // set up the counter stateful object on page load, based on what comes in from last page
  useEffect(() => {
    const freshState = {};
    from.forEach((activity) => {
      freshState[activity._id] = { count: 0, name: activity.name };
    });
    // sets the counter to the fresh state on page load
    setCounter(freshState);
  }, []);

  // adds to the overall count, as well as updates each activity within the counter object
  const handleCounting = (act) => {
    setClickCount(clickCount + 1);
    const id = act._id;
    counterState[id].count++;
    setCounter(counterState, counterState[id]);
  };

  return (
    <>
      <Navbar />
      <div className="grid md:grid-rows-2-md md:grid-flow-col m-3 gap-3">
        <div className="card bg-neutral text-center">
          <h2 className="card-header text-neutral p-3 bg-primary">Today</h2>
          <div className="p-3 grid-flow-col">
            <YourDayActivities
              activities={from}
              handleCounting={handleCounting}
            />
            <ActivitiesDoneToday clickCount={clickCount} />
            <Link to={"/dashboard"}>
              <Button color="primary" activity={END_DAY} />
            </Link>
          </div>
        </div>
        <div className="card bg-neutral text-center">
          <h2 className="card-header text-neutral p-3 bg-secondary">
            Your Stats
          </h2>
          <div className="p-3">
            <h2>Today's Stats</h2>
            <Chart counterState={counterState} />
          </div>
        </div>
      </div>
    </>
  );
}
export default YourDay;
