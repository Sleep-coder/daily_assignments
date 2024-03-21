// src/App.js
import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

function App() {
  const [currentPage, setCurrentPage] = useState("signup");

  const renderPage = () => {
    switch (currentPage) {
      case "signup":
        return <Signup />;
      case "login":
        return <Login />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Authentication App</h1>
      <div>
        <button onClick={() => setCurrentPage("signup")}>Signup</button>
        <button onClick={() => setCurrentPage("login")}>Login</button>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;
