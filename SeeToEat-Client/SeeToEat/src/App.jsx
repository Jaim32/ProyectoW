import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WelcomePage from './pages/WelcomePage';
import UserProfile_user from './pages/UserProfile_usear';
import UserProfile from './pages/UserProfile';
import LoginPage from './pages/LogIn';
import RegistroPage from './pages/Registro';
import RestaurantPage from './pages/Restaurants';
import RegisterLocalPage from './pages/RegisterLocalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistroPage />} />
        <Route path="/localR" element={<RegisterLocalPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
