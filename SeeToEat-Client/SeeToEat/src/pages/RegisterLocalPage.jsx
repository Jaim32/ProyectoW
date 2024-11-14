import React from 'react';
import Header from '../components/Header';
import '../styles/RegisterLocalPage.css';

function RegisterLocalPage() {
    return (
      <div className="register-local-page">
        <Header />
        <div className="form-container">
          <h2>Crea tu local en SeeToEat</h2>
          <form className="local-form">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" className="form-input" placeholder="Ingrese el nombre de su local" />
            
            <label htmlFor="openingTime">Hora de apertura</label>
            <input type="time" id="openingTime" className="form-input" />
            
            <label htmlFor="closingTime">Hora de cierre</label>
            <input type="time" id="closingTime" className="form-input" />
            
            <label htmlFor="foodType">Tipo de comida</label>
            <input type="text" id="foodType" className="form-input" placeholder="Ej. Italiana, Mexicana" />
            
            <div className="menu-items-container">
              <label htmlFor="menuItems" className="menu-label">Agregar ítems de menú</label>
              <textarea id="menuItems" className="form-input" placeholder="Lista de ítems de menú"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Enviar Solicitud</button>
          </form>
        </div>
      </div>
    );
  }
  

export default RegisterLocalPage;
