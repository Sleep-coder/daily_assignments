// FeaturedDishes.js
import React from "react";

const FeaturedDishes = () => {
  return (
    <section className="featured-dishes">
      <h2 className="section-title">Featured Dishes</h2>
      <div className="dish">
        <img src="/breakfast.jpg" alt="Dish 1" />
        <div className="dish-info">
          <h3>Dish 1 Name</h3>
          <p>Salad for breakfast</p>
        </div>
      </div>
      <div className="dish">
        <img src="/desert.jpg" alt="Dish 2" />
        <div className="dish-info">
          <h3>Dish 2 Name</h3>
          <p>Strawberry Pastry</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
