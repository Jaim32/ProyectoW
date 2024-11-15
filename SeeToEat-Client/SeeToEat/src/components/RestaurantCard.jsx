import React from "react";
import "../styles/RestaurantCard.css";
import { Route, useNavigate } from 'react-router-dom';

const handleDetail = () =>{
    Route('/restaurantDetail');
}
const RestaurantCard = ({ name, image,type,average }) => {
  return (
    <div className="restaurant-card" onClick={handleDetail}>
      <img src={image} alt={name} className="restaurant-image" />
      <h5 className="restaurant-type"> {type}</h5>
      <p className="restaurant-name">{name}
      <h5 className="restaurant-average"> Precio promedio {average}</h5>
      
      </p>
      
    </div>
  );
};

export default RestaurantCard;
