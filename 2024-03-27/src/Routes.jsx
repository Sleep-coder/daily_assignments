import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes from react-router-dom
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import "./App.css";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
