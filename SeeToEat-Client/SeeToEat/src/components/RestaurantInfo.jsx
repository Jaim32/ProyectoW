import React from 'react';
import '../styles/RestaurantInfo.css';
import img7 from "../assets/images/charlie.jpeg";


function RestaurantInfo({ restaurant }) {
  return (
    <div className="restaurant-info">
      <div className="restaurant-logo-container">
        <img src={img7} alt="Logo del Restaurante" className="restaurant-logo" />
      </div>
      <div className="restaurant-details">
        <h2>{restaurant.name}</h2>
        <p>Tipo de comida: {restaurant.type}</p>
        <p>Horario de apertura: {restaurant.openingTime}</p>
        <p>Horario de cierre: {restaurant.closingTime}</p>
        <p>Ubicación: {restaurant.location}</p>
      </div>
      <button className="location-btn">Ubicación</button>
    </div>
  );
}

export default RestaurantInfo;