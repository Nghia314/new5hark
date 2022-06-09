import React from "react";

function CreateActivityForm({
  handleFormChange,
  handleFormSubmit,
  handleDeleteState,
}) {
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
        <br></br>
        <br></br>
      </form>
      <button onClick={handleDeleteState} className="btn btn-error font-bold">
        Delete Activities
      </button>
    </div>
  );
}

export default CreateActivityForm;
