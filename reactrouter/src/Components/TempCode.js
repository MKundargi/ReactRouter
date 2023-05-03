import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Temp_code = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <h2>Verify Your Login Code Here</h2>

      <div className="container mt-5">
        <div className="input-group mb-3 w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Code"
            aria-label="Recipient's username"
            described="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={() => navigate("/registration")}
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
};

export default Temp_code;
