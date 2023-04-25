import { React, useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const API_URL = "http://localhost:5005";

  const { setUser } = useContext(UserContext);
  // This function will allow us to navigate between routes
  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`${API_URL}/auth/signup`, requestBody).then((response) => {
      setUser(() => response.data.user);
      if (response.data.success) {
        navigateTo(`/`);
      } else {
        setErrorMessage(() => response.data.message);
      }
    });
  };
  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <h3> {!!errorMessage && errorMessage}</h3>
    </div>
  );
}
