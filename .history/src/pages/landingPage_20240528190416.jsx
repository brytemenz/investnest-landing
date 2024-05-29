// src/pages/LandingPage.jsx
import React from 'react';
import leftImage from '../assets/leftimage.jpg';
import rightImage from '../assets/rightimage.jpg';
import '../landingPage.css';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-3/5 bg-cover bg-center" style={{ backgroundImage: `url(${leftImage})` }}></div>
      <div className="w-2/5 bg-cover bg-center" style={{ backgroundImage: `url(${rightImage})` }}></div>
    </div>
  );
};

export default LandingPage;
