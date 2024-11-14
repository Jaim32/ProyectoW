import React from 'react';
import Header from '..//components/Header';
import '../styles/LogIn.css'; // Usa los mismos estilos de WelcomePage
import restaurantImage from '../assets/images/pizza.jpg'; // Cambia la imagen si lo deseas
import googleIcon from '../assets/icons/google.png';


function RegistroPage() {  
  return (
    <div className="welcome-page">
      <Header />
      <div className="welcome-content-container">
        <div className="welcome-image-container">
          <img src={restaurantImage} alt="Restaurante" className="welcome-image" />
        </div>
        <div className="welcome-content-father">
          <div className="welcome-content">
            <h2>Registro</h2>
            <form className="login-form">
              <label htmlFor="username">Usuario</label>
              <input type="text" id="username" className="login-input" placeholder="Ingrese su usuario" />
              
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" className="login-input" placeholder="Ingrese su contraseña" />
              
              <button type="submit" className="welcome-btn submit-btn">Iniciar sesión</button>

              <button type="button" className="google-login-btn">
                <img src={googleIcon} alt="Google" className="google-icon" />
                Continuar con Google
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroPage;
