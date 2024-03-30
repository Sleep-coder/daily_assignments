// reducers.js
import { combineReducers } from "redux";
import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
  PLACE_ORDER,
  FETCH_ORDERS,
} from "./actions";

const initialProductsState = [];

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

// Add other reducers here

const rootReducer = combineReducers({
  products: productsReducer,
  // Add other reducers here
});

export default rootReducer;
