// store.js
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer
  // Add middleware or enhancers here
);

export default store;
