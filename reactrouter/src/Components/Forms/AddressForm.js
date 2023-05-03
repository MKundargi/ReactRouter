import React, { useState } from "react";
// import "../Components/SCSS/AddrForms.scss";
// import "../Components/SCSS/AddrForms.css";
import "./style.css";

function AddressForm() {
  const [addressId, setAddressId] = useState("");
  const [addressType, setAddressType] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [empId, setEmpId] = useState("");
  const [errors, setErrors] = useState({});

  const handleAddressIdChange = (event) => {
    setAddressId(event.target.value);
  };

  const handleAddressTypeChange = (event) => {
    setAddressType(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleAddressLine1Change = (event) => {
    setAddressLine1(event.target.value);
  };

  const handleAddressLine2Change = (event) => {
    setAddressLine2(event.target.value);
  };

  const handleEmpIdChange = (event) => {
    setEmpId(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data
    const addressDetails = {
      addressId,
      addressType,
      city,
      state,
      pincode,
      addressLine1,
      addressLine2,
      empId,
      errors,
    };

    console.log({
      addressId,
      addressType,
      city,
      state,
      pincode,
      addressLine1,
      addressLine2,
      empId,
      errors,
    });

    const validateAddressId = (value) => {
      if (!value) {
        setErrors((prevState) => ({
          ...prevState,
          addressId: "Address ID is required",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          addressId: null,
        }));
      }
    };

    const validateAddressType = (value) => {
      if (!value) {
        setErrors((prevState) => ({
          ...prevState,
          addressType: "Address type is required",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          addressType: null,
        }));
      }
    };

    const validateCity = (value) => {
      if (!value) {
        setErrors((prevState) => ({
          ...prevState,
          city: "City is required",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          city: null,
        }));
      }
    };

    const validateState = (value) => {
      if (!value) {
        setErrors((prevState) => ({
          ...prevState,
          state: "State is required",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          state: null,
        }));
      }
    };

    const validatePincode = (value) => {
      const pincodeRegex = /^\d{6}$/;
      if (!value) {
        setErrors((prevState) => ({
          ...prevState,
          pincode: "Pincode is required",
        }));
      } else if (!pincodeRegex.test(value)) {
        setErrors((prevState) => ({
          ...prevState,
          pincode: "Invalid Pincode",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          pincode: null,
        }));
      }
    };

    const validateAddressLine1 = (value) => {
      if (!value) {
        setErrors((prevState) => ({
          ...prevState,
          addressLine1: "Address Line 1 is required",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          addressLine1: null,
        }));
      }
    };

    const validateAddressLine2 = (value) => {
      if (!value) {
        setErrors((prevState) => ({
          ...prevState,
          addressLine2: "Address Line 2 is required",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          addressLine2: null,
        }));
      }
    };

    const validateEmpId = (value) => {
      if (!value) {
        setErrors((prevState) => ({
          ...prevState,
          empId: "Employee ID is required",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          empId: null,
        }));
      }
    };

    const formValidation = () => {
      validateAddressId(addressId);
      validateAddressType(addressType);
      validateCity(city);
      validateState(state);
      validatePincode(pincode);
      validateAddressLine1(addressLine1);
      validateAddressLine2(addressLine2);
      validateEmpId(empId);

      const isError =
        errors.addressId ||
        errors.addressType ||
        errors.city ||
        errors.state ||
        errors.pincode ||
        errors.addressLine1 ||
        errors.addressLine2 ||
        errors.empId;

      return !isError;
    };

    fetch("http://192.168.0.62:8080/address/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addressDetails),
    }).then(() => {
      console.log("Form submitted successfully");
    });
  };

  return (
    <>
      <div class="container my-5 " id="first-container">
        <div className="row ">
          <div class="col-lg-4"></div>
          <div className="col-12 header p-5 mb-5"></div>
          <h3 className="page_title mx-3">1. Employee Address Details</h3>

          {/* 2nd row and it have two col and  containers  */}
          <div class="row ">
            {/* first Container (1st col) */}
            <div class="col-lg-8">
              <div class="container  shadow mt-3 mb-5">
                <div className="row secondtitle ">
                  <div className="col-12 mt-5  mx-3">
                    <h3>Address information</h3>
                  </div>
                </div>

                <div className="row row-cols-3 mx-4">
                  <div className="col my-5 ">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fw-semibold fw-semibold"
                      >
                        Address ID
                      </label>
                      <input
                        type="text"
                        className={`form-control w-75 p-2  ${
                          errors.addressId ? "is-invalid" : ""
                        }`}
                        placeholder="Enter your Address ID"
                        value={addressId}
                        onChange={handleAddressIdChange}
                        required
                      />
                      {errors.addressId && (
                        <div className="invalid-feedback">
                          {errors.addressId}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col my-5  ">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fw-semibold"
                      >
                        Address Type
                      </label>
                      <input
                        type="text"
                        className={`form-control w-75 p-2  ${
                          errors.addressType ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Address Type"
                        value={addressType}
                        onChange={handleAddressTypeChange}
                        required
                      />
                      {errors.addressType && (
                        <div className="invalid-feedback">
                          {errors.addressType}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col my-5  ">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fw-semibold"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className={`form-control w-75 p-2  ${
                          errors.city ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your City Name"
                        value={city}
                        onChange={handleCityChange}
                        required
                      />
                      {errors.city && (
                        <div className="invalid-feedback">{errors.city}</div>
                      )}
                    </div>
                  </div>

                  <div className="col my-5  ">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fw-semibold"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className={`form-control w-75 p-2  ${
                          errors.state ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your State Name"
                        value={state}
                        onChange={handleStateChange}
                        required
                      />
                      {errors.state && (
                        <div className="invalid-feedback">{errors.state}</div>
                      )}
                    </div>
                  </div>

                  <div className="col my-5  ">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fw-semibold"
                      >
                        Pin Code
                      </label>
                      <input
                        type="text"
                        className={`form-control w-75 p-2  ${
                          errors.pincode ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your Pin Code"
                        value={pincode}
                        onChange={handlePincodeChange}
                        required
                      />
                      {errors.pincode && (
                        <div className="invalid-feedback">{errors.pincode}</div>
                      )}
                    </div>
                  </div>

                  <div className="col my-5  ">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fw-semibold"
                      >
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        className={`form-control w-75 p-2  ${
                          errors.addressLine1 ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your Address Line 1"
                        value={addressLine1}
                        onChange={handleAddressLine1Change}
                        required
                      />
                      {errors.addressLine1 && (
                        <div className="invalid-feedback">
                          {errors.addressLine1}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col my-5  ">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fw-semibold"
                      >
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        className={`form-control w-75 p-2  ${
                          errors.addressLine2 ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your Address Line 2"
                        value={addressLine2}
                        onChange={handleAddressLine2Change}
                        required
                      />
                      {errors.addressLine2 && (
                        <div className="invalid-feedback">
                          {errors.addressLine2}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col my-5  ">
                    <div class="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fw-semibold"
                      >
                        Employee ID
                      </label>
                      <input
                        type="text"
                        className={`form-control w-75 p-2  ${
                          errors.empId ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your Employee ID"
                        value={empId}
                        onChange={handleEmpIdChange}
                        required
                      />
                      {errors.empId && (
                        <div className="invalid-feedback">{errors.empId}</div>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4 mx-5">
                      <button
                        className="save w-150 fs-3 fw-semibold my-5 p-1"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressForm;
