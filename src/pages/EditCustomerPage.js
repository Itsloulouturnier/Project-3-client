import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://project-3-ironhack-server.onrender.com";

function EditCustomerPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [firstname, setFirstName] = useState("");

  const { customerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/customers/${customerId}`)
      .then((response) => {
        const oneCustomer = response.data;
        setTitle(oneCustomer.title);
        setDescription(oneCustomer.description);
        setFirstName(oneCustomer.firstname);
      })
      .catch((error) => console.log(error));
  }, [customerId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, firstname };

    axios
      .put(`${API_URL}/api/customers/${customerId}`, requestBody)
      .then((response) => {
        navigate(`/customers/${customerId}`);
      });
  };

  const deleteCustomer = () => {
    axios
      .delete(`${API_URL}/api/customers/${customerId}`)
      .then(() => {
        navigate("/customers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditCustomerPage">
      <h3>Edit the Customer</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>First Name:</label>
        <textarea
          name="first name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <button type="submit">Update Customer</button>
      </form>

      <button onClick={deleteCustomer}>Delete Customer</button>
    </div>
  );
}

export default EditCustomerPage;
