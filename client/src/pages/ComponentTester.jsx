import React from "react";
import Loginform from "../components/Loginform";
import SignupForm from "../components/SignupForm";

function ComponentTester() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Test Components Here!</h1>
      {/* <Loginform /> */}
      <SignupForm />
    </>
  );
}

export default ComponentTester;
