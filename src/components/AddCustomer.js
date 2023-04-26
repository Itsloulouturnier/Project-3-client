import { useState } from "react";
import axios from "axios";

const API_URL = "https://project-3-ironhack-server.onrender.com";

function AddCustomer(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [firstname, setFirstName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, firstname };

    axios
      .post(`${API_URL}/api/customers`, requestBody)
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        setFirstName("");
        props.refreshCustomers();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddCustomer">
      <h3>Add Customer</h3>

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

        <label>First Name:</label>
        <textarea
          type="text"
          name="first name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCustomer;
