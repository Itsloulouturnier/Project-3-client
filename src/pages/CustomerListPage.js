import { useState, useEffect } from "react";
import axios from "axios";

import CustomerCard from "../components/CustomerCard";
import AddCustomer from "../components/AddCustomer";

const API_URL = "http://localhost:5005";

function CustomerListPage() {
  const [customers, setCustomers] = useState([]);

  const getAllCustomers = () => {
    axios
      .get(`${API_URL}/api/customers`)
      .then((response) => setCustomers(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllCustomers();
  }, [] );

  
  return (
    <div className="CustomerListPage">
      
      <AddCustomer refreshCustomers={getAllCustomers} />
      
      { customers.map((customer) => <CustomerCard key={customer._id} {...customer} />  )} 
       
    </div>
  );
}

export default CustomerListPage;

