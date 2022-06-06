import React from "react";

function CreateActivityForm() {
  return (
    <div>
      <h1 className="mb-3">Create Activity</h1>
      {/* <Form / handleNewActivityForm></Form> */}
      <form>
        <div className="input-group">
          <input
            className="input input-primary input-bordered w-full"
            type="text"
            placeholder="Activity name"
          />
          <button type="submit" className="btn btn-primary font-bold">
            +
          </button>
        </div>

        <input
          className="input input-primary input-bordered w-full"
          type="text"
          placeholder="Description"
        />
      </form>
    </div>
  );
}

export default CreateActivityForm;
