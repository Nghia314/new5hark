import React, { useState } from "react";

import Security from "../utils/security";
import { createActivity } from "../utils/API";

function CreateActivityForm() {
  const [formState, setForm] = useState({});

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = Security.loggedIn() ? Security.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      const res = await createActivity(formState, token);
      if (!res.ok) {
        alert("something went wrong while creating activity");
      }
      const newAct = await res.json();
      alert("New Activity Created");
    } catch (err) {
      alert("Something went wrong with whole function");
    }
  };

  const handleFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...formState, [name]: value });
  };

  return (
    <div>
      <h1 className="mb-3">Create Activity</h1>
      {/* <Form / handleNewActivityForm></Form> */}
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
        <input
          className="input input-primary mb-3 input-bordered w-full"
          type="text"
          placeholder="Activity name"
          name="name"
        />
        <input
          className="input input-primary mb-3 input-bordered w-full"
          type="text"
          placeholder="Description"
          name="description"
        />
        <button type="submit" className="btn btn-primary font-bold">
          Add Activity
        </button>
      </form>
    </div>
  );
}

export default CreateActivityForm;
