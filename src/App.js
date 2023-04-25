// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import EditCustomerPage from "./pages/EditCustomerPage";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./contexts/UserContext";
import SignupPage from "./pages/SignupPage";
import EditTaskPage from "./pages/EditTaskPage";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/customers" element={<CustomerListPage />} />
          <Route
            exact
            path="/customers/:customerId"
            element={<CustomerDetailsPage />}
          />
          <Route
            exact
            path="/customers/edit/:customerId"
            element={<EditCustomerPage />}
          />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/tasks/edit/:taskId" element={<EditTaskPage />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
