import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/WoodDetailPage.css";

const WoodDetailPage = () => {
  const { woodName } = useParams();
  const navigate = useNavigate();
  const [wood, setWood] = useState(null);
  const [woodsList, setWoodsList] = useState([]);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "eng" // Default to English
  );

  useEffect(() => {
    fetch("/woods/woodsData.json")
      .then((response) => response.json())
      .then((data) => {
        setWoodsList(data);
        const foundWood = data.find((w) => w.name === woodName);
        setWood(foundWood);
      })
      .catch((error) => console.error("Error loading wood data:", error));
  }, [woodName]);

  const handleLanguageChange = (lang) => {
    localStorage.setItem("language", lang); // Save language preference
    setLanguage(lang);
  };

  const handleNavigation = (direction) => {
    if (!woodsList.length) return;
    const currentIndex = woodsList.findIndex((w) => w.name === woodName);
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % woodsList.length
        : (currentIndex - 1 + woodsList.length) % woodsList.length;
    navigate(`/wood/${woodsList[newIndex].name}`);
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
      <div className="title-navigation">
        <button onClick={() => handleNavigation("prev")}>&larr;</button> {/* Left arrow */}
        <h1>{wood.name}</h1>
        <button onClick={() => handleNavigation("next")}>&rarr;</button> {/* Right arrow */}
      </div>
      <div className="description-container">
        <div className="wood-description">
          {wood[`${language}Description`]
            ? wood[`${language}Description`]
                .split("\n")
                .map((line, index) => <p key={index}>{line}</p>)
            : <p>Description not available in the selected language.</p>}
        </div>
      </div>
      <div className="language-selector">
        <button
          className={`language-button ${language === "eng" ? "active" : ""}`}
          onClick={() => handleLanguageChange("eng")}
        >
          English
        </button>
        <button
          className={`language-button ${language === "esp" ? "active" : ""}`}
          onClick={() => handleLanguageChange("esp")}
        >
          Español
        </button>
        <button
          className={`language-button ${language === "fre" ? "active" : ""}`}
          onClick={() => handleLanguageChange("fre")}
        >
          Français
        </button>
      </div>
      <div className="slider-container">
        <Slider {...woodDetailSliderSettings} className="wood-slider">
          {wood.images.map((image, index) => (
            <div key={index} className="image-slide">
              <img
                src={image}
                alt={`${wood.name} - ${index}`}
                className="wood-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WoodDetailPage;
