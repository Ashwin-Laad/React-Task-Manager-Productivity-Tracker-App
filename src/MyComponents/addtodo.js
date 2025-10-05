import React, { useState } from "react";

const s = { margin: "25px" };

function Addtodo(props) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !description) {
      alert("Please fill both fields");
      return;
    }
    props.add(taskName, description); // call addTodo from App
    setTaskName("");
    setDescription("");
  };

  return (
    <form style={s} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="taskInput" className="form-label">Task</label>
        <input
          type="text"
          className="form-control"
          id="taskInput"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="descInput" className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          id="descInput"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Addtodo;
