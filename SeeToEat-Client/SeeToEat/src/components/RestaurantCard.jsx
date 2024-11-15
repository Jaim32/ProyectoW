import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RestaurantCard.css";

const RestaurantCard = ({ name, image, type,average}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/restaurantDetail');
  };
  return (
    <div className="restaurant-card" onClick={handleClick}>
      <img src={image} alt={name} className="restaurant-image" />
      <h5 className="restaurant-type"> {type}</h5>
      <p className="restaurant-name">{name}
      <h5 className="restaurant-average"> Precio promedio {average}</h5>
      
      </p>
      
    </div>
  );
};

export default RestaurantCard;
