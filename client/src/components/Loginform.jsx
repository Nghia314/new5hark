import React, { useState } from "react";
import { Link } from "react-router-dom";

import { loginUser } from "../utils/API";
import Security from "../utils/security";

function Loginform() {
  const [formState, setForm] = useState({ email: "", password: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formState, [name]: value });
  };

  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formState);

      if (!res.ok) {
        throw new Error("Please try again!");
      }

      const { token } = await res.json();
      Security.save(token);
    } catch (err) {
      console.log(err);
      alert("Please try again!");
    }
  };
  
  return (
    <>
      <div className="block p-6 rounded-lg text-light shadow-lg bg-neutral w-full max-w-md">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group mb-6">
            <h2 className="text-center text-3xl font-bold mb-6">Sign in</h2>
            <input
              className="input input-bordered w-full valid:focus:input-primary invalid:text-error invalid:border-error focus:invalid:text-error focus:invalid:border-error"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-6">
            <input
              type="password"
              className="input input-bordered w-full focus:input-primary"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign in
          </button>
          
          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
            to="/Signup"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
              Resgister
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Loginform;
