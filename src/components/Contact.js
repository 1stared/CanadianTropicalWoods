import React from "react";
import "../styles/Contact.css"; // Updated path

function Contact() {
  return (
    <footer id="contact" className="footer">
      <h1>Contact Us</h1>
      <div className="contacts-container">
        <div className="contact-person">
          <h2>Mario Bufalino</h2>
          <p>Mario.b@canadiantropicalwoods.ca</p>
          <p>(647) 631-1841</p>
        </div>
        <div className="contact-person">
          <h2>Eric Arellano</h2>
          <p>Eric.a@canadiantropicalwoods.ca</p>
          <p>(226) 700-8730</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
