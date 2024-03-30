// actions.js
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const PLACE_ORDER = "PLACE_ORDER";
export const FETCH_ORDERS = "FETCH_ORDERS";

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId,
});

// Define other action creators similarly
