import React from 'react';
import '../styles/Footer.css';
import facebookIcon from '../assets/icons/facebook.png';
import twitterIcon from '../assets/icons/x.png';
import instagramIcon from '../assets/icons/insta.png';
import linkedinIcon from '../assets/icons/linked.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Information</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="social-icons">
          <img src={facebookIcon} alt="Facebook" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={instagramIcon} alt="Instagram" />
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>hello@correo.com</p>
      </div>
    </footer>
  );
}

export default Footer;
