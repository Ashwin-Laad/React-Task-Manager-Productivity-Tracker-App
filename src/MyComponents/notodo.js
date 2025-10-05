import React from "react";

function NoTodos() {
  return (
    <div className="container my-5">
      <div className="card text-center">
        <div className="card-body">
          <h3 className="card-title">No Tasks Yet!</h3>
          <p className="card-text">
            Your to-do list is empty. Add some tasks to get started.
          </p>
          <i className="bi bi-list-task" style={{ fontSize: "3rem" }}></i>
        </div>
      </div>
    </div>
  );
}

export default NoTodos;
