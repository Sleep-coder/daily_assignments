// MainContent.js
import React from "react";
import FeaturedDishes from "./featuredDishes";
import Promotions from "./promotions";
import ContactInfo from "./contactInfo";

const MainContent = () => {
  return (
    <main>
      <FeaturedDishes />
      <Promotions />
      <ContactInfo />
      {/* Add more decomposed components or content */}
    </main>
  );
};

export default MainContent;
