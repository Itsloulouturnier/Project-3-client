import { Link } from "react-router-dom";

function CustomerCard ( { title, description, _id , firstname} ) {
  
  return (
    <div className="CustomerCard card">
      <Link to={`/customers/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <p style={{ maxWidth: "400px" }}>{firstname} </p>
    </div>
  );
}

export default CustomerCard;