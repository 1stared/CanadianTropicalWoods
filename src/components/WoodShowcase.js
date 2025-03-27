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

  return (
    <div className="woodshowcase-container"> {/* Add a unique class */}
      <div className="wood-grid">
        {woods.map((wood) => (
          <Link key={wood.name} to={`/wood/${wood.name}`} className="wood-card">
            <img src={wood.images[0]} alt={wood.name} className="wood-image" />
            <h2>{wood.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WoodShowcase;
