import React, { useState } from "react";
import "./style.css";
import Navbar from "../Navbar";

const BasicDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dateOfJoining, setDoj] = useState("");
  const [empId, setEmpId] = useState("");
  const [phone, setPhone] = useState("");
  const [emailid, setEmail] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDobChange = (event) => {
    const dateOfBirth = event.target.value;
    setDob(dateOfBirth);
    const age = Age(dateOfBirth);
    setAge(age);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handleDojChange = (event) => {
    setDoj(event.target.value);
  };

  const handleEmpIdChange = (event) => {
    setEmpId(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const Age = (dob) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const basicDetails = {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      empId,
      phone,
      emailid,
      age,
      bloodGroup,
      dateOfJoining,
    };
    console.log({
      firstName,
      lastName,
      dateOfBirth,
      gender,
      empId,
      phone,
      emailid,
      age,
      bloodGroup,
      dateOfJoining,
    });

    fetch("http://192.168.0.51:8080/employeeDetails/CreateNewEmployee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(basicDetails),
    }).then(() => {
      console.log("New employee Added");
    });
  };
  return (
    <>
      <Navbar />
      <div class="container my-5 " id="first-container">
        {/* first row header */}
        <div className="row ">
          <div className="col-12 header p-4 mb-5"></div>
        </div>
        <h3 className="page_title mx-3">1. Employee Basic Details</h3>

        {/* 2nd row and it have two col and  containers  */}
        <div class="row ">
          {/* first Container (1st col) */}
          <div class="col-lg-8 mx-auto">
            <div class="container  shadow mt-3 mb-5">
              <div className="row secondtitle ">
                <div className="col-12 mt-5  mx-3">
                  <h3>Personal information</h3>
                </div>
              </div>
              <div className="row row-cols-3 mx-4">
                <div className="col my-5 ">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold fw-semibold"
                    >
                      Firstname
                    </label>
                    <input
                      type="text"
                      class="form-control w-75 p-2 "
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      required
                    />
                  </div>
                </div>
                <div className="col my-5  ">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Middlename
                    </label>
                    <input
                      type="text"
                      class="form-control w-75 p-2"
                      placeholder="Enter your middle name"
                      value={middleName}
                      onChange={handleMiddleNameChange}
                      required
                    />
                  </div>
                </div>
                <div className="col my-5">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Lastname
                    </label>
                    <input
                      type="text"
                      class="form-control w-75 p-2"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={handleLastNameChange}
                      required
                    />
                  </div>
                </div>
                <div className="col my-5">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      class="form-control w-75 p-2"
                      placeholder="Select Gender"
                      value={gender}
                      onChange={handleGenderChange}
                      required
                    >
                      <option value="">--Select--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col my-5">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Date of birth
                    </label>
                    <input
                      type="date"
                      class="form-control w-75 p-2"
                      placeholder="Select date of birth"
                      value={dateOfBirth}
                      onChange={handleDobChange}
                      required
                    />
                  </div>
                </div>
                <div className="col my-5">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      class="form-control w-75 p-2"
                      value={age}
                      onChange={handleAgeChange}
                      disabled
                    />
                  </div>
                </div>
                <div className="col my-5">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Blood group
                    </label>
                    <select
                      id="bloodGroup"
                      class="form-control w-75 p-2"
                      placeholder="Select blood group"
                      value={bloodGroup}
                      onChange={handleBloodGroupChange}
                      required
                    >
                      <option value="">--Select--</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                </div>
                <div className="col my-5">
                  <div class="mb-2">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Date of joining
                    </label>
                    <input
                      type="date"
                      class="form-control w-75 p-2"
                      placeholder="Select date of joining"
                      value={dateOfJoining}
                      onChange={handleDojChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row  ">
                <div class="col-2  mx-5">
                  <button
                    class=" back w-100 fs-3 fw-semibold  mb-5 mt-2 p-1"
                    type="button"
                  >
                    back
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second container (2nd col)*/}

          <div class="col-lg-3 mx-auto ">
            <div class="container shadow mt-3 mb-3">
              <div className="row secondtitle ">
                <div className="col-12 mt-5  mx-3"></div>
              </div>
              <div className="row row-cols-3 mx-4">
                <div className="col-8 my-5 ">
                  <div class="mb-3 mt-5">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Emp ID
                    </label>
                    <input
                      type="text"
                      class="form-control p-2"
                      value={empId}
                      placeholder="Enter you Employee Id"
                      onChange={handleEmpIdChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row row-cols-3 mx-4">
                <div className="col-8 my-5 ">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Phone
                    </label>
                    <input
                      type="email"
                      class="form-control p-2"
                      value={phone}
                      placeholder="Enter your Phone number"
                      onChange={handlePhoneChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row row-cols-3 mx-4">
                <div className="col-8 mt-5 ">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fw-semibold"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      class="form-control p-2"
                      value={emailid}
                      placeholder="Enter your Email Id"
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row  ">
                <div class="col-4  mx-5">
                  <button
                    class=" save w-100 fs-3 fw-semibold  my-5 p-1"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="footer">
          <p>This is the footer.</p>
        </div> */}
      </div>
    </>
  );
};

export default BasicDetails;
