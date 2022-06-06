import React, { useEffect, useState } from "react";

//import utils
import Security from "../utils/security";
import { getUserData } from "../utils/API";

//import components
import Button from "../components/Button";

function UserActivities() {
  function itWorks() {
    console.log("it works");
  }
  const [userActivities, setUserActivities] = useState([]);

  useEffect(() => {
    const userDataFetch = async () => {
      try {
        const token = Security.loggedIn() ? Security.getToken() : null;

        if (!token) {
          alert("something went wrong with the token");
          return false;
        }

        const res = await getUserData(token);

        if (!res.ok) {
          alert("Something Went Wrong with getting user data");
        }

        const data = await res.json();
        setUserActivities(data.user.createdActivities);
      } catch (err) {
        alert("Something Went Wrong with the userdatafetch function");
      }
    };

    userDataFetch();
  }, []);

  return (
    <div>
      <h1 className="mb-3">Your Created Activities</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* <Button activity={"something"} color={"primary"} /> */}
        {userActivities.map((activity) => (
          <Button
            activity={activity.name}
            key={activity._id}
            color={"secondary"}
            onClick={itWorks}
          />
        ))}
      </div>
    </div>
  );
}

export default UserActivities;
