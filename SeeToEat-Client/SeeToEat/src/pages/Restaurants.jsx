import React from "react";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import "../styles/RestaurantPage.css";
import img1 from "../assets/images/greenfork.jpeg";
import img2 from "../assets/images/laparilla.jpeg";
import img3 from "../assets/images/silvestre.webp";
import img4 from "../assets/images/sushi.jpeg";
import img5 from "../assets/images/elbajon.jpeg";
import img6 from "../assets/images/punta.jpeg";
import img7 from "../assets/images/charlie.jpeg";
import img8 from "../assets/images/lacalaca.jpeg";

const restaurants = [
    { id: 1, name: "The Green Fork", image: img1 },
    { id: 2, name: "La Parrilla", image: img2 },
    { id: 3, name: "Silvestre", image: img3 },
    { id: 4, name: "Sushi House", image: img4 },
    { id: 5, name: "ElBigotesV", image: img5 },
    { id: 6, name: "Punta Toro", image: img6 },
    { id: 7, name: "Charlie Bay", image: img7 },
    { id: 8, name: "Lasclacas", image: img8 },
];

const RestaurantPage = () => {
  return (
    <div className="restaurant-page">
      <Header />
      <h2 className="title">Restaurantes</h2>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} name={restaurant.name} image={restaurant.image} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;