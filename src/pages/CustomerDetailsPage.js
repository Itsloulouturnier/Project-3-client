import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";


const API_URL = "http://localhost:5005";


function CustomerDetailsPage (props) {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();
  
  const getCustomer = () => {
    axios
      .get(`${API_URL}/api/customers/${customerId}`)
      .then((response) => {
      	const oneCustomer = response.data;
      	setCustomer(oneCustomer);
    	})
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getCustomer();
  }, [] );

  
  return (
    <div className="CustomerDetails">
    
      {customer && (
        <>
          <h1>{customer.title}</h1>
          <p>{customer.description}</p>
          <p>{customer.firstname}</p>
        </>
      )}

      
      <AddTask refreshCustomer={getCustomer} customerId={customerId} />          

      { customer && customer.tasks.map((task) => <TaskCard key={task._id} {...task} /> )} 

      <Link to="/customers">
        <button>Back to customers</button>
      </Link>
          
      <Link to={`/customers/edit/${customerId}`}>
        <button>Edit Customer</button>
      </Link>
      
    </div>
  );
}

export default CustomerDetailsPage;