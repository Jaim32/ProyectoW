import React from 'react';
import Header from '../components/Header';
import UserInfo from '../components/UserInfo';
import Tickets from '../components/TIckets_user';
import '../styles/UserProfile.css';

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
