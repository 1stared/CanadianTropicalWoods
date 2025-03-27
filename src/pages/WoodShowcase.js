import React, { useState, useEffect } from "react";
import "./WoodShowcase.css";

const WoodShowcase = () => {
  const [woodList, setWoodList] = useState([]);

  useEffect(() => {
    fetch("/woods/woodsData.json")
      .then((response) => response.json())
      .then((data) => setWoodList(data))
      .catch((error) => console.error("Error loading wood data:", error));
  }, []);

  return (
    <div className="woodshowcase-container">
      <h1>Wood Showcase</h1>
      <div className="wood-grid">
        {woodList.map((wood, index) => (
          <a key={index} href={`/wood/${wood.name}`} className="wood-card">
            <img src={wood.image} alt={wood.name} className="wood-image" />
            <h2>{wood.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WoodShowcase;