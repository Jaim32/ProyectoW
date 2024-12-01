import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/RegisterLocalPage.css';

function RegisterLocalPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setNewMenuItem({ name: '', price: '', description: '', image: null });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenuItem({ ...newMenuItem, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewMenuItem({ ...newMenuItem, image: e.target.files[0] });
  };

  const handleAddMenuItem = () => {
    setMenuItems([...menuItems, newMenuItem]);
    closeModal();
  };

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
          
          <button type="button" onClick={openModal} className="add-item-btn">Agregar ítem de menú</button >
          
          <button type="submit" className="submit-btn">Enviar Solicitud</button>
        </form>

        <div className="menu-items-list">
          <h3>Items del Menú</h3>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <strong>{item.name}</strong> - ${item.price}
                <p>{item.description}</p>
                {item.image && <img src={URL.createObjectURL(item.image)} alt={item.name} className="menu-item-image" />}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Agregar Ítem de Menú</h3>
            <label>Nombre</label>
            <input type="text" name="name" value={newMenuItem.name} onChange={handleInputChange} className="form-input" />

            <label>Precio</label>
            <input type="number" name="price" value={newMenuItem.price} onChange={handleInputChange} className="form-input" />

            <label>Descripción</label>
            <textarea name="description" value={newMenuItem.description} onChange={handleInputChange} className="form-input"></textarea>

            <label>Imagen</label>
            <input type="file" onChange={handleImageChange} className="form-input" />

            <div className="modal-buttons">
              <button onClick={handleAddMenuItem} className="confirm-btn">Confirmar</button>
              <button onClick={closeModal} className="cancel-btn">Cancelar</button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default RegisterLocalPage;