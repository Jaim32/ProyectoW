import React from 'react';
import '../styles/UserInfo.css';
import profileImage from '../assets/icons/profile.png';

function UserInfo() {
  return (
    <div className="user-info">
      <img src={profileImage} alt="Usuario" className="profile-image" />
      <div className="user-details">
        <h2>Usuario: xxxxxxx</h2>
        <p>Admin</p>
        <button className="logout-button">Cerrar sesión</button>
      </div>
    </div>
  );
}

export default UserInfo;
