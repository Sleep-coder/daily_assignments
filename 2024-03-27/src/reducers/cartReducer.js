const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("Adding to cart:", action.payload); // Verify payload in reducer
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        updatedCartItems[existingItemIndex].totalPrice += action.payload.price;
        return {
          ...state,
          cartItems: updatedCartItems,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          totalPrice: state.totalPrice + newItem.price,
        };
      }

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
