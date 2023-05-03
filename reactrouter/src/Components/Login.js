import React from "react";
import "../Inc/navbar.css";

import { NavLink, useNavigate } from "react-router-dom";
import Registration from "./Registration";

const Login = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/employeeDashboard");
  };

  // const SignUp = () => {
  //   const initialValues = {
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirm_password: "",
  //   };

  return (
    <>
      <div className="row ">
        <div className="col-6 d-flex align-items-center justify-content-center">
          {/* hero  section */}
          <section className="hero-section mx-auto ">
            <p>WelCome to</p>
            <h1>infokalash</h1>
          </section>
        </div>

        <section className="container shadow-lg w-50 col-lg-9 col-xl-8 border mt-5">
          <div className="bg-image h-100 ">
            <div
              className="mask d-flex align-items-center h-100 "
              // style={background-color: #f3f2f2}
            >
              <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-1 col-lg-9 col-xl-8  ">
                    {/* <div className="card" style="border-radius: 1rem;"> */}
                    <div className="row g-0">
                      <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body py-5 px-1 p-md-3">
                          <form action="">
                            <h4
                              className="fw-bold mb-4"
                              // style="color: #92aad0;"
                            >
                              Log in to your account
                            </h4>
                            <p className="mb-4">
                              To log in, please fill in these text fiels with
                              your e-mail address and password.
                            </p>

                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="form2Example1"
                                className="form-control"
                              />
                              <label className="form-label" for="form2Example1">
                                Email address
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="form2Example2"
                                className="form-control"
                              />
                              <label className="form-label" for="form2Example2">
                                Password
                              </label>
                            </div>

                            <div className="d-flex justify-content-end pt-1 mb-4">
                              <button
                                className="btn btn-primary btn-rounded"
                                type="submit"
                                onClick={() => goToHome()}
                              >
                                Log in
                              </button>
                            </div>
                            <hr />
                            <span>
                              <a className="link float-end" href="#!">
                                Forgot password? Click here.
                              </a>
                            </span>
                            <span>
                              <NavLink
                                to="/tempcode"
                                element={<Registration />}
                              >
                                Registration
                              </NavLink>
                            </span>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      </div>
    </>
  );
};

export default Login;
