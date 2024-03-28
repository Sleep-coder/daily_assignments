// HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const products = [
  {
    id: 1,
    name: "Product A",
    price: 10,
    image: "haryo-setyadi-acn5ERAeSb4-unsplash.jpg",
  },
  {
    id: 2,
    name: "Product B",
    price: 15,
    image: "md-salman-tWOz2_EK5EQ-unsplash.jpg",
  },
  // Add more products here
];

const HomePage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    dispatch(addToCart(product));
  };

  return (
    <div className="home-page">
      <h1 className="page-title">Products</h1>
      {products.map((product) => (
        <div key={product.id} className="product">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <p className="product-name">{product.name}</p>

          <p className="product-price">${product.price}</p>
          <button
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
      <Link to="/cart">
        <button className="go-to-cart-btn">Go to Cart</button>
      </Link>
    </div>
  );
};

export default HomePage;
