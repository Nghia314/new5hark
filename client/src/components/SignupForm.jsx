import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  const [formState, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <>
      <div className="block p-6 rounded-lg text-light shadow-lg bg-neutral w-full max-w-md">
        <h2 className="text-center text-3xl font-bold mb-6">Sign up!</h2>
        <form>
          <div className="form-group mb-6">
            <input
              type="text"
              className="input input-bordered w-full focus:input-primary"
              // className="form-control block w-full px-3 py-1.5 m-0
              //   text-base font-normal text-light
              //   bg-base-100 bg-clip-padding border-gray-300 rounded transition ease-in-out
              //   focus:bg-base-100 focus:outline-primary focus:outline-none"
              name="name"
              aria-describedby="emailHelp123"
              placeholder="Name"
            />
          </div>

          <div className="form-group mb-6">
            <input
              type="email"
              className="input input-bordered w-full focus:input-primary"
              // className="form-control block w-full px-3 py-1.5 m-0
              //   text-base font-normal text-light
              //   bg-base-100 bg-clip-padding border-gray-300 rounded transition ease-in-out
              //   focus:bg-base-100 focus:outline-primary focus:outline-none"
              id="exampleInput125"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              className="input input-bordered w-full focus:input-primary"
              // className="form-control block w-full px-3 py-1.5 m-0
              //   text-base font-normal text-light
              //   bg-base-100 bg-clip-padding border-gray-300 rounded transition ease-in-out
              //   focus:bg-base-100 focus:outline-primary focus:outline-none"
              id="exampleInput126"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            // className="w-full px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md
            // hover:bg-blue-700 hover:shadow-lg
            // focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}
export default SignupForm;
