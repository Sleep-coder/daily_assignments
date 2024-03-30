// LoginPage.js
import React, { useState } from "react";
import api from "../services/api";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", formData);
      console.log("Login successful:", response.data);
      // Redirect to home page after successful login
      window.location.href = "/"; // Redirect to home page
    } catch (error) {
      console.error("Login failed:", error.response.data);
      setLoginError("Invalid email or password. Please try again."); // Set login error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
