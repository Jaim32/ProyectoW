import React from "react";
import "../styles/RestaurantCard.css";

const RestaurantCard = ({ name, image }) => {
    return (
      <div className="restaurant-card">
        <div className="restaurant-image-container">
          <img src={image} alt={name} className="restaurant-image" />
        </div>
        <p className="restaurant-name">{name}</p>
      </div>
    );
  };
  

export default RestaurantCard;
