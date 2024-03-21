// src/Signup.js
import React, { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  password: "",
  confirmPassword: "",
};

function signupReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

function Signup() {
  const [state, dispatch] = useReducer(signupReducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data in local storage
    localStorage.setItem("userData", JSON.stringify(state));
    console.log("Data stored in local storage:", state);
    alert("Successfully signed up");
    // Reset form fields
    dispatch({ type: "UPDATE_FIELD", field: "firstName", value: "" });
    dispatch({ type: "UPDATE_FIELD", field: "lastName", value: "" });
    dispatch({ type: "UPDATE_FIELD", field: "email", value: "" });
    dispatch({ type: "UPDATE_FIELD", field: "contact", value: "" });
    dispatch({ type: "UPDATE_FIELD", field: "password", value: "" });
    dispatch({ type: "UPDATE_FIELD", field: "confirmPassword", value: "" });
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={state.contact}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
