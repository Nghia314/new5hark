import React, { useState } from "react";

import Security from "../utils/security";

function CreateActivityForm({ handleFormChange, handleFormSubmit }) {
  return (
    <div>
      <h1 className="mb-3">Create Activity</h1>
      {/* <Form / handleNewActivityForm></Form> */}
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
        {/* <div className="input-group"> */}
        <input
          className="input input-primary mb-3 input-bordered w-full"
          type="text"
          placeholder="Activity Name"
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
