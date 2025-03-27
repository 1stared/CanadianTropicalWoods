import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css"; // Updated path
import logo from "../assets/logo.png"; // Import the logo image

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const animationSpeed = 10;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {isHomePage ? (
          <img 
            src={logo} 
            alt="Canadian & Tropical Woods Inc." 
            className="navbar-logo" // Removed inline styles
          />
        ) : (
          <RouterLink to="/">
            <img 
              src={logo} 
              alt="Canadian & Tropical Woods Inc." 
              className="navbar-logo" // Removed inline styles
            />
          </RouterLink>
        )}
      </div>
      <div className="navbar-right">
        {isHomePage ? (
          <>
            <ScrollLink to="woodshowcase" smooth={true} duration={animationSpeed}>Showcase</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={animationSpeed}>Contact</ScrollLink>
          </>
        ) : (
          <>
            <RouterLink to="/#woodshowcase">Showcase</RouterLink>
            <RouterLink to="/#contact">Contact</RouterLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
