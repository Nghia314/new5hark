import React, { useState } from "react";
import { Link } from "react-router-dom";

import { createUser } from "../utils/API";
import Sec from "../utils/security";

function SignupForm() {
  const [formState, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(formState);
    try {
      const res = await createUser(formState);

      if (!res.ok) {
        throw new Error("Oops, please try again!");
      }
      const { token, user } = await res.json();

      Sec.login(token);
    } catch (err) {
      alert("Try again");
    }
    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="name"
              aria-describedby="emailHelp123"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-6">
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
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}
export default SignupForm;
