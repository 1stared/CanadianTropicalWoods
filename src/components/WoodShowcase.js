import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import "../styles/WoodShowcase.css"; // Updated path

const WoodShowcase = () => {
  const [woods, setWoods] = useState([]);

  useEffect(() => {
    fetch("/woods/woodsData.json")
      .then((response) => response.json())
      .then((data) => setWoods(data))
      .catch((error) => console.error("Error loading wood data:", error));
  }, []);

  const tropicalWoods = woods.filter((wood) => wood.region === "Tropical");
  const canadianWoods = woods.filter((wood) => wood.region === "Canadian");

  return (
    <div className="woodshowcase-container"> {/* Add a unique class */}
      <div className="wood-category">
        <h1>Tropical Woods</h1>
        <div className="wood-grid">
          {tropicalWoods.map((wood) => (
            <Link key={wood.name} to={`/wood/${wood.name}`} className="wood-card">
              <div className="wood-image-container">
                <img src={wood.images[0]} alt={wood.name} className="wood-image" />
              </div>
              <h2>{wood.name}</h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="wood-category">
        <h1>Canadian Woods</h1>
        <div className="wood-grid">
          {canadianWoods.map((wood) => (
            <Link key={wood.name} to={`/wood/${wood.name}`} className="wood-card">
              <div className="wood-image-container">
                <img src={wood.images[0]} alt={wood.name} className="wood-image" />
              </div>
              <h2>{wood.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WoodShowcase;
