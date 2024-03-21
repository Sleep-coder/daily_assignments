// src/Login.js
import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
};

function loginReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials against local storage
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData &&
      userData.email === state.email &&
      userData.password === state.password
    ) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials!");
    }
    // Reset form fields
    dispatch({ type: "UPDATE_FIELD", field: "email", value: "" });
    dispatch({ type: "UPDATE_FIELD", field: "password", value: "" });
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
