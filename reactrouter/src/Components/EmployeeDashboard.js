import React from "react";
import Cards from "../Inc/Cards";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container-fuild">
        <h2 className=" my-2 p-4 text-center ">Employee Dashboard</h2>
      </div>
      <div className="container mt-5">
        {/* <div className="row"> */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4  g-5 shadow p-4">
          <Cards
            class="cards"
            title="Task Raised & Time Sheet"
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/twocards")}
              >
                Click
              </button>
            }
          />

          <Cards
            title="Leave Management & Holidays"
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/leaveapp")}
              >
                Click
              </button>
            }
          />
          <Cards
            title="Learning & Development"
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/learningdevelopment")}
              >
                Click
              </button>
            }
          />

          <Cards
            title="Rewards & Recognition"
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/twocards")}
              >
                Click
              </button>
            }
          />

          <Cards
            title="Salary & Pay Slip"
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/twocards")}
              >
                Click
              </button>
            }
          />
          <Cards
            title="Employee Friendly Facilities"
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/twocards")}
              >
                Click
              </button>
            }
          />
          <Cards
            title="Reimbursement"
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/twocards")}
              >
                Click
              </button>
            }
          />
          <Cards
            title="Role & Responsibility"
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/twocards")}
              >
                Click
              </button>
            }
          />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default EmployeeDashboard;
