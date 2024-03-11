// Promotions.js
import React from "react";

const Promotions = () => {
  return (
    <section className="promotions">
      <h2 className="section-title">Promotions</h2>
      <div className="promotion">
        <img src="/frenchtoast.jpg" alt="Promotion 1" />
        <div className="promotion-info">
          <h3>Promotion 1</h3>
          <p>New French Toast</p>
        </div>
      </div>
      <div className="promotion">
        <img src="/vegan.jpg" alt="Promotion 2" />
        <div className="promotion-info">
          <h3>Promotion 2</h3>
          <p>New vegan Breakfast</p>
        </div>
      </div>
      {/* Add more promotions as needed */}
    </section>
  );
};

export default Promotions;
