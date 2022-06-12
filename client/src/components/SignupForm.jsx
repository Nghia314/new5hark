import React, { useState } from "react";
import { Navigate } from "react-router-dom";

// import utils
import { createUser } from "../utils/API";
import Security from "../utils/security";

function SignupForm() {
  const [formState, setForm] = useState({ name: "", email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUser(formState);

      if (!res.ok) {
        throw new Error("Oops, please try again!");
      }
      const { token } = await res.json();
      Security.save(token);
      setLoggedIn(true);
    } catch (err) {
      alert("Something Went Wrong, Please try again");
    }
  };

  return loggedIn ? (
    <Navigate replace to={"/dashboard"}></Navigate>
  ) : (
    <>
      <div className="z-10 block p-6 rounded-lg text-light shadow-lg bg-neutral w-full max-w-md">
        <h2 className="text-center text-3xl font-bold mb-6">Sign up!</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group mb-6">
            <input
              type="text"
              className="input input-bordered w-full focus:input-primary"
              name="name"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-6">
            <input
              type="email"
              className="input input-bordered w-full valid:focus:input-primary invalid:text-error invalid:border-error focus:invalid:text-error focus:invalid:border-error"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-6">
            <input
              type="password"
              className="input input-bordered w-full focus:input-primary"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}
export default SignupForm;
