// src/components/Footer.js

import React from 'react';
import '../App.css';
import facebookIcon from '../images/facebook.jpg';
import whatsappIcon from '../images/whatsapp.jpg';
import linkedinIcon from '../images/linkedin.jpg';
import tiktokIcon from '../images/tiktok.jpg';
import instagramIcon from '../images/instagram.jpg';
import githubIcon from '../images/github.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="social-media-icons">
          <a href="https://www.facebook.com/profile.php?id=61561890047851.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://chat.whatsapp.com/FLxzHGooyPoBSPTN9lgbQJ" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://vm.tiktok.com/ZMrDGUWfb/.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        <br />
        <span>&copy; 2024 NES. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
