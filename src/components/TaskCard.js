import React from "react";
import { Link } from "react-router-dom";
// We are deconstructing the props object directly in the parentheses of the function

function TaskCard({ title, description, _id }) {
  const taskId = _id;
  return (
    <div className="TaskCard card">
      <h3>{title}</h3>
      <h4>Description:</h4>
      <p>{description}</p>
      <Link to={`/tasks/edit/${taskId}`}>
        <button>Edit Customer</button>
      </Link>
    </div>
  );
}

export default TaskCard;
