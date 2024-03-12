// ItemCard.js
import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  if (!item) {
    return null;
  }

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "790px",
  };

  const detailsStyle = {
    padding: "10px",
  };

  const headingStyle = {
    margin: "0",
    color: "#333",
  };

  const paragraphStyle = {
    margin: "5px 0",
    color: "#777",
  };

  return (
    <div style={cardStyle} className="item-card">
      <img style={imageStyle} src={item.image} alt={item.name} />
      <div style={detailsStyle} className="item-details">
        <h3 style={headingStyle}>{item.name}</h3>
        <p style={paragraphStyle}>{item.description}</p>
        <p style={paragraphStyle}>Price: ${item.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
