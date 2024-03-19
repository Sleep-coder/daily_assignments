// App.js
import React, { useState } from "react";
import Home from "./components/Home";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "users":
        return <Users />;
      case "posts":
        return <Posts />;
      case "todos":
        return <Todos />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
