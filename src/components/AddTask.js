import { useState } from "react";
import axios from "axios";

const API_URL = "https://project-3-ironhack-server.onrender.com";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the customer id when creating the new task
    const { customerId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, description, customerId };

    axios
      .post(`${API_URL}/api/tasks`, requestBody)
      .then((response) => {
        console.log({ createTask: response });
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");

        // Invoke the callback function coming through the props
        // from the CustomerDetailsPage, to refresh the customer details
        props.refreshCustomer();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
