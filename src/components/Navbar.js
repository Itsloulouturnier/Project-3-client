import { React, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const navigateTo = useNavigate();

  const logout = () => {
    setUser(() => null);
    navigateTo("/");
  };

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {!!user ? (
        <div>
          <Link to="/customers">
            <button>Customers</button>
          </Link>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/Signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
