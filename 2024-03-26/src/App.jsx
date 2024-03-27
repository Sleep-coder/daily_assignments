import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";
import UpdateTodo from "./components/UpdateTodo";

const App = () => {
  return (
    <Router>
      <div className="nav-container">
        <nav>
          <Link className="nav-link" to="/">
            Create
          </Link>
          <Link className="nav-link" to="/display">
            Display
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<CreateTodo />} />
        <Route path="/display" element={<DisplayTodo />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
      </Routes>
    </Router>
  );
};

export default App;
