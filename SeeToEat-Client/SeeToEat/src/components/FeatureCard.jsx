import React from 'react';
import '../styles/FeatureCard.css';

function FeatureCard({ title, icon }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <div className="icon">{icon} </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nam...</p>
    </div>
  );
}

export default FeatureCard;
