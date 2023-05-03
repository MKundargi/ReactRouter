import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./Components/Error";
import Col from "./Components/Col";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Registration from "./Components/Registration";
import TempCode from "./Components/TempCode";
import EmployeeDashboard from "./Components/EmployeeDashboard";
import BasicDetails from "./Components/Forms/BasicDetails";
import TwoCards from "./Components/SlipedCards/TwoCards";
import LearningDevelopment from "./Components/SlipedCards/LearningDevelopment";
import LeaveApp from "./Components/FinalPages/LeaveApp";
// import AddressForm from "./Components/Forms/AddressForm";

const App = () => {
  let isLogged = true;

  return (
    <>
      {/* <Navbar /> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/col" element={<Col />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />

          <Route exact path="/tempcode" element={<TempCode />} />
          <Route
            path="/employeeDashboard"
            element={
              isLogged ? (
                <EmployeeDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route path="/logout" element={<Logout />} />
          <Route path="/twocards" element={<TwoCards />} />
          <Route
            path="/learningdevelopment"
            element={<LearningDevelopment />}
          />
          <Route path="/leaveapp" element={<LeaveApp />} />
          <Route path="/basicdetails" element={<BasicDetails />} />
          {/* <Route path="/addressdetails" element={<AddressForm />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
