import React from "react";
import "../styles/About.css";
import Icon from '../assets/rainforest_alliance_logo.PNG';
import backgroundImage from '../assets/tikal_background.png';

const About = () => {
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
        <p>Certificates: FSC C153948, PEFC/01-31-26, SFI-01 895.</p>
      </div>
      <div className="icon">
        <img src={Icon} alt="Icon" />
      </div>
    </section>
  );
};

export default About;
