// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";
import UpdateTodo from "./components/UpdateTodo";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Create</Link>
          <Link to="/display">Display</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CreateTodo />} />
          <Route path="/display" element={<DisplayTodo />} />
          <Route path="/update/:id" element={<UpdateTodo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
