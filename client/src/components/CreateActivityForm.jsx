import React from "react";

function CreateActivityForm({
  handleFormChange,
  handleFormSubmit,
  handleDeleteState,
}) {
  return (
    <div>
      <h1 className="mb-3">Create an Activity</h1>
      {/* <Form / handleNewActivityForm></Form> */}
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
        {/* <div className="input-group"> */}
        <input
          className="input input-primary mb-3 input-bordered w-full"
          type="text"
          placeholder="Activity Name"
          name="name"
          autoComplete="off"
        />
        <input
          className="input input-primary mb-3 input-bordered w-full"
          type="text"
          placeholder="Description"
          name="description"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-primary mb-3 font-bold">
          Add Activity
        </button>
      </form>
      <button onClick={handleDeleteState} className="btn btn-error font-bold">
        Delete Activities
      </button>
    </div>
  );
}

export default CreateActivityForm;
