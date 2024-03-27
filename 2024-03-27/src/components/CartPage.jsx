// CartPage.jsx
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
      <h1 className="page-title">Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p className="item-name">{item.name}</p>
          <p className="item-quantity">Quantity: {item.quantity}</p>
          <p className="item-total-price">Total Price: ${item.totalPrice}</p>
          <button
            className="action-btn"
            onClick={() => handleIncrease(item.id)}>
            +
          </button>
          <button
            className="action-btn"
            onClick={() => handleDecrease(item.id)}>
            -
          </button>
          <button className="action-btn" onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <p className="total-price">Total: ${totalPrice}</p>
    </div>
  );
};

export default CartPage;
