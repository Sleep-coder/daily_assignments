import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import todoReducer from "./redux/todoSlice";
import "./index.css";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

const rootElement = document.getElementById("root");
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.createRoot(rootElement).render(app);
