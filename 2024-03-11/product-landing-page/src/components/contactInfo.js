// ContactInfo.js
import React from "react";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <h2 className="section-title">Contact Information</h2>
      <div className="info-item">
        <h3>Address</h3>
        <p>123 Cafe Street, Cityville, Country</p>
      </div>
      <div className="info-item">
        <h3>Phone Number</h3>
        <p>+1 234 567 890</p>
      </div>
      <div className="info-item">
        <h3>Hours of Operation</h3>
        <p>Monday - Sunday: 8 AM - 10 PM</p>
      </div>
    </section>
  );
};

export default ContactInfo;
