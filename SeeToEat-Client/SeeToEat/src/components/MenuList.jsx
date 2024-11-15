import React from 'react';
import '../styles/MenuList.css';

function MenuList({ menuItems }) {
  return (
    <div className="menu-list">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <div className="menu-item-details">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
          <span className="menu-item-price">{item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default MenuList;
