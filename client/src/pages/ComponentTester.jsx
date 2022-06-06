import React from "react";
import Loginform from "../components/Loginform";
import SignupForm from "../components/SignupForm";
import Button from "../components/Button";

function ComponentTester() {
  function itWorks() {
    console.log("it works");
  }

  const obj = {
    _id: 12341234,
    name: "walk",
    description: "i like to walk at night"
  }

  return (
    <>
      <h1 className="text-center text-3xl font-bold">Test Components Here!</h1>
      {/* <Loginform />
      <SignupForm /> */}
      <Button 
      activity={obj.name}
      onClick={itWorks}
      color={"primary"}
      />
    </>
  );
}

export default ComponentTester;
