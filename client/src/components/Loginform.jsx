import React, { useState } from "react";
import { Link } from "react-router-dom";

function Loginform() {
  const [formState, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(formState);
  };
  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Email address
            </label>
            <input
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none invalid:border-error invalid:text-error focus:invalid:border-error focus:invalid:text-error"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Sign in
          </button>

          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <a
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Loginform;
