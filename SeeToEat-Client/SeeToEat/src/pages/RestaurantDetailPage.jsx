import React from 'react';
import Header from '../components/Header';
import RestaurantInfo from '../components/RestaurantInfo';
import CommentsBox from '../components/CommentsBox';
import MenuList from '../components/MenuList';
import '../styles/RestaurantDetailPage.css';

function RestaurantDetailPage() {
  const restaurant = {
    name: "El Rinconcito",
    type: "Rápida",
    openingTime: "6:00 A.M",
    closingTime: "4:00 P.M",
    location: "PEA",
    menu: [
      { name: "Hamburguesa", description: "Rica hamburguesa de carne", price: "$3.00" },
      { name: "Hamburguesa", description: "Rica hamburguesa de carne", price: "$3.00" },
      { name: "Hamburguesa", description: "Rica hamburguesa de carne", price: "$3.00" },
    ],
  };

  const comments = [
    "Excelente lugar para comer!",
    "Muy buena atención y comida deliciosa.",
    "Ambiente agradable y precios justos."
  ];

  return (
    <div className="restaurant-detail-page">
      <Header />
      <RestaurantInfo restaurant={restaurant} />
      <div className="content-container">
        <CommentsBox comments={comments} />
        <div className="menu-section">
          <h3>MENU</h3>
          <MenuList menuItems={restaurant.menu} />
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailPage;
