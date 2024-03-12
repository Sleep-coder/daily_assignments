// App.js
import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

import MainContent from "./components/mainContent";
import ItemCard from "./components/ItemCard";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <ItemCard />
      <Footer />
    </div>
  );
};

export default App;
