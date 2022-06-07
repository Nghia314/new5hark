import React from "react";
import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <>
      <div className="flex justify-center p-3">
        <SignupForm className="grow max-w-[50rem]"/>
      </div>
    </>
  );
}

export default Signup;
