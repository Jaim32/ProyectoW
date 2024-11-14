import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import '../styles/LandingPage.css'


function Landing() {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <Features />
    </div>
  );
}

export default Landing;
