import React from "react";

import Security from "../utils/security";
import { getUserData } from "../utils/API";
import Button from "../components/Button";

function UserActivities({ userActivities }) {
  console.log(userActivities);
  return (
    <div>
      <h1 className="mb-3">BOOPY's Activities</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* MOCK BUTTON DATA, DELETE LATER */}

        {userActivities.map((activity) => {
          <Button
            id={activity._id}
            name={activity.name}
            description={activity.description}
          />;
        })}
        {/* <button className="btn btn-warning b w-full truncate">Walk</button> */}
        {/* <button className="btn btn-warning w-full truncate">Walk</button> */}
        {/* <button className="btn btn-warning w-full truncate">Walk</button> */}
        {/* <button className="btn btn-warning w-full truncate">Walk</button> */}
        {/* <button className="btn btn-warning w-full truncate">Walk</button> */}
        {/* MOCK BUTTON DATA, DELETE LATER */}
      </div>
    </div>
  );
}

export default UserActivities;
