import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/About.css";
import Icon from '../assets/rainforest_alliance_logo.PNG';
import backgroundImage from '../assets/tikal_background.png';

const About = () => {
  const animationSpeed = 10;
  
  return (
    <section 
      id="about" 
      className="section responsive" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <h1>About</h1>
        <p>Canadian & Tropical Woods Inc. a Canadian based company is dedicated to promoting sustainable practices as a proud member of the Rainforest Alliance.</p> 
        <p>We specialize in the import and export of forest products and by-products for North American and European markets.</p>
        <p>Our mission focuses on providing a responsible supply of both precious and semi-precious woods, serving various industries such as cabinetmaking, furniture design, musical instrument fabrication, construction, and more.</p>
        <p>Additionally, we offer a wide range of high-quality lumber sourced from Canada, ensuring our clients have access to premium materials that meet their diverse needs.</p>
        <p>Certificates: FSC C153948, PEFC/01-31-26, SFI-01 895. FSC C001844, PEFC/29-31-183, SFI-00057, EU Ecolabel FR/011/10. FSC C014249.</p>
        <button className="contact-button"><ScrollLink to="contact" smooth={true} duration={animationSpeed}>Contact Us</ScrollLink></button>
        
      </div>
      <div className="icon">
        <img src={Icon} alt="Icon" />
      </div>
    </section>
  );
};

export default About;
