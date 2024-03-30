// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import OrderPage from "./components/OrderPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/signup" element={SignUpPage} />
          <Route path="/login" element={LoginPage} />
          <Route path="/cart" element={CartPage} />
          <Route path="/orders" element={OrderPage} />
          <Route path="/" element={HomePage} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
