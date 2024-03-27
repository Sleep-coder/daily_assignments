import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../actions/cartActions";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Price: ${item.totalPrice}</p>
          <button onClick={() => handleIncrease(item.id)}>+</button>
          <button onClick={() => handleDecrease(item.id)}>-</button>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default CartPage;
