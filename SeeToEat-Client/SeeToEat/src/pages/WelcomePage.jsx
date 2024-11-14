import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/WelcomePage.css';
import pizzaImage from '../assets/images/rest.jpg';

function WelcomePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Redirige a la página de inicio de sesión
  };

  const handleRegister = () => {
    navigate('/register'); // Redirige a la página de registro
  };

  return (
    <div className="welcome-page">
      <Header /> 
      <div className="welcome-content-container">
        
        <div className="welcome-image-container">
          <img src={pizzaImage} alt="Deliciosa pizza" className="welcome-image" />
        </div> <div><div className="welcome-content">
         
          <h2>Bienvenidos</h2>
          <p>Bienvenido a SeeToEat donde puedes explorar tus opciones para comer</p>
          <button onClick={handleLogin} className="welcome-btn login-btn">Iniciar Sesión</button>
          <button onClick={handleRegister} className="welcome-btn register-btn">Registrarme</button>
        </div></div>
        
      </div>
    </div>
  );
}

export default WelcomePage;
