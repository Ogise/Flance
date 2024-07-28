// src/pages/Home.js

import React from 'react';
import Slideshow from '../components/Slideshow';
import '../App.css';

const Home = () => {
  return (
    <div className="home-page">
      
      <div className="hero-section">
        <h1>Welcome to AssignProject Hub</h1>
        <p>We are a team of talented professionals dedicated to providing top-notch online writing and assignment services.</p>
      </div>
      <Slideshow />
      <div className="clients-section">
        <h2>Our Trusted Clients</h2>
      
      </div>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

export default Home;
