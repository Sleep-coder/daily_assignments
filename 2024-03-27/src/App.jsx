import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter from react-router-dom
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import AppRoutes from "./Routes"; // Import your routes

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {" "}
        {/* Wrap the entire application with BrowserRouter */}
        <div className="app">
          <AppRoutes />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
