import React from 'react';
import FeatureCard from '../components/FeatureCard';
import '../styles/Features.css';

function Features() {
  return (
    <section className="features">
      <FeatureCard title="Busca" icon="🔍" />
      <FeatureCard title="Ubica" icon="📍" />
      <FeatureCard title="Adelante" icon="⏩" />
    </section>
  );
}

export default Features;
