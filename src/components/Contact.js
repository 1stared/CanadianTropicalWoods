import React from "react";
import "../styles/Contact.css"; // Updated path

function Contact() {
  return (
    <footer id="contact" className="footer">
      <h1>Contact Us</h1>
      <div className="contacts-container">
        <div className="contacts-flex">
          <div className="contact-office">
            <h2>Canada Office</h2>
            <div className="contact-person">
              <h4>Mario Bufalino</h4>
              <p>Mario.b@canadiantropicalwoods.ca</p>
              <p>+1 (647) 631-1841</p>
            </div>
            <div className="contact-person">
              <h4>Eric Arellano</h4>
              <p>Eric.a@canadiantropicalwoods.ca</p>
              <p>+1 (226) 700-8730</p>
            </div>
          </div>
          <div className="contact-office">
            <h2>México Office</h2>
            <div className="contact-person">
              <h4>Pepe Avendaño</h4>
              <p>jose.a@canadiantropicalwoods.ca</p>
              <p>+52 (55) 4353-7402</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
