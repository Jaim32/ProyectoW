import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/welcome'); // Redirige a la página de bienvenida
  };

  const handleRegister = () => {
    navigate('/welcome'); // Redirige a la página de bienvenida
  };
  const handleRestaurants = () =>{
    navigate('/restaurant');
  }

  return (
    <header className="header">
      <h1 className="logo">SeeToEat</h1>
      <nav className="nav">
        <a  onClick={handleRestaurants} href="#restaurantes">Restaurantes</a>
        <a href="#explorar">Explorar</a>
        <button onClick={handleLogin} className="landing-btn login-btn">Iniciar Sesión</button>
        <button onClick={handleRegister} className="landing-btn register-btn">Registrarme</button>
      </nav>
    </header>
  );
}

export default Header;