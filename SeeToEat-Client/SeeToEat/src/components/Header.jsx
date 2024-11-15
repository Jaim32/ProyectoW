import React from 'react';
import '../styles/Header.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Lista de rutas en las que no se deben mostrar los botones de "Iniciar Sesión" y "Registrarme"
  const routesWithoutButtons = ['/welcome', '/login', '/restaurant', '/restaurantDetail','/register','/localR','/user', '/UserProfile'];

  // Verifica si la ruta actual está en la lista de rutas sin botones
  const hideButtons = routesWithoutButtons.includes(location.pathname);

  const handleLogin = () => {
    navigate('/welcome'); // Redirige a la página de bienvenida
  };

  const handleRegister = () => {
    navigate('/welcome'); // Redirige a la página de bienvenida
  };

  const handleRestaurants = () => {
    navigate('/restaurant');
  };

  return (
    <header className="header">
      <h1 className="logo">SeeToEat</h1>
      <nav className="nav">
        <a onClick={handleRestaurants} href="#restaurantes">Restaurantes</a>
        {!hideButtons && (
          <>
            <button onClick={handleLogin} className="landing-btn login-btn">Iniciar Sesión</button>
            <button onClick={handleRegister} className="landing-btn register-btn">Registrarme</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
