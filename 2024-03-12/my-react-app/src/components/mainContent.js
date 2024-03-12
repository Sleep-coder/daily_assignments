// MainContent.js
import React from "react";
import ItemCard from "./ItemCard";
import "./MainContent.css";

const items = [
  {
    name: "Item 1",
    description: "BreakFast Salad.",
    price: 15.99,
    image: "/breakfast.jpg",
  },
  {
    name: "Item 2",
    description: "Strawberry Pastry.",
    price: 12.99,
    image: "/desert.jpg",
  },
];

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="item-cards-container">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
