// src/reducers/cartReducer.js

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      // Update quantity and total price for the item with matching ID
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice + item.price,
              }
            : item
        ),
        totalPrice:
          state.totalPrice +
          state.cartItems.find((item) => item.id === action.payload).price,
      };
    case "DECREASE_QUANTITY":
      // Update quantity and total price for the item with matching ID
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: Math.max(item.quantity - 1, 0),
                totalPrice: Math.max(item.totalPrice - item.price, 0),
              }
            : item
        ),
        totalPrice:
          state.totalPrice -
          state.cartItems.find((item) => item.id === action.payload).price,
      };
    case "REMOVE_FROM_CART":
      // Remove item from cartItems array based on ID
      const removedItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        totalPrice: state.totalPrice - removedItem.quantity * removedItem.price,
      };
    default:
      return state;
  }
};

export default cartReducer;
