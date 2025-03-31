import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/WoodDetailPage.css";

const WoodDetailPage = () => {
  const { woodName } = useParams();
  const [wood, setWood] = useState(null);
  const [showEnglish, setShowEnglish] = useState(
    localStorage.getItem("language") === "english" // Retrieve language preference
  );

  useEffect(() => {
    fetch("/woods/woodsData.json")
      .then((response) => response.json())
      .then((data) => {
        const foundWood = data.find((w) => w.name === woodName);
        setWood(foundWood);
      })
      .catch((error) => console.error("Error loading wood data:", error));
  }, [woodName]);

  const toggleLanguage = () => {
    const newLanguage = showEnglish ? "spanish" : "english";
    localStorage.setItem("language", newLanguage); // Save language preference
    setShowEnglish(!showEnglish);
  };

  if (!wood) {
    return <p>Loading...</p>;
  }

  const woodDetailSliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true, // Ensure the slider adjusts to image height
    centerMode: true, // Center the slides
    centerPadding: "20px", // Add padding around the centered slide
  };

  return (
    <div className="wood-detail-container">
      <h1>{wood.name}</h1>
      <div className="description-container">
        <div className="wood-description">
          {showEnglish
            ? wood.engDescription.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))
            : wood.espDescription.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
          <button 
            className="toggle-button" 
            onClick={toggleLanguage}
          >
            {showEnglish ? "Ver en Español" : "View in English"}
          </button>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...woodDetailSliderSettings} className="wood-slider">
          {wood.images.map((image, index) => (
            <div key={index} className="image-slide">
              <img src={image} alt={`${wood.name} - ${index}`} className="wood-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WoodDetailPage;
