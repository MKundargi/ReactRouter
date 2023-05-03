import React from "react";
import Cards from "../Inc/Cards";
import Basic from "../Components/Images/Register/Basic.svg";
import Bank from "../Components/Images/Register/Bank.svg";
import Edu from "../Components/Images/Register/Edu.svg";
import Exp from "../Components/Images/Register/Exp.svg";
import Photo from "../Components/Images/Register/photo.svg";
import Duc from "../Components/Images/Register/document.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Registration(props) {
  const navigate = useNavigate();
  return (
    <>
      <Navbar one="Hr" two="Admin" three="Lead" four="Manager" />
      <div className="container-fuild">
        <h2 className=" my-2 p-4 text-center ">Documents Verification</h2>
      </div>
      <div className="container mt-5">
        {/* <div className="row"> */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4  g-5 shadow p-4">
          <Cards
            class="cards"
            title="Basic Details"
            img={<img src={Basic} alt="" className="regisimg " />}
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/basicdetails")}
              >
                Click here
              </button>
            }
          />

          <Cards
            title="Address Details"
            img={<img src={Bank} alt="" className="regisimg" />}
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/addressdetails")}
              >
                Click here
              </button>
            }
          />
          <Cards
            title="Education Details"
            img={<img src={Edu} alt="" className="regisimg" />}
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/")}
              >
                Click here
              </button>
            }
          />
          <Cards
            title="Experience Details"
            img={<img src={Exp} alt="" className="regisimg" />}
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/")}
              >
                Click here
              </button>
            }
          />

          <Cards
            title="Photo Details"
            img={<img src={Photo} alt="" className="regisimg" />}
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/")}
              >
                Click here
              </button>
            }
          />

          <Cards
            title="Documents Details"
            img={<img src={Duc} alt="" className="regisimg" />}
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/")}
              >
                Click here
              </button>
            }
          />
          <Cards
            title="Documents Details"
            img={<img src={Duc} alt="" className="regisimg" />}
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/")}
              >
                Click here
              </button>
            }
          />
          <Cards
            title="Documents Details"
            img={<img src={Duc} alt="" className="regisimg" />}
            fun={
              <button
                type="button"
                className="btn btn-outline-warning w-50 mx-auto mb-3"
                onClick={() => navigate("/")}
              >
                Click here
              </button>
            }
          />
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Registration;
