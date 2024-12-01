import React from 'react';
import Header from '../components/Header';
import UserInfo from '../components/UserInfo';
import Tickets from '../components/Tickets';
import '../styles/UserProfile.css';
import Footer from '../components/Footer';


function UserProfile() {

    
  return (
    <div className="user-profile">
      <Header />
      <UserInfo />
      <Tickets />
    </div>
  );
}

export default UserProfile;
