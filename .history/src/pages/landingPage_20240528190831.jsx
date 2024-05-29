// src/pages/LandingPage.jsx
import React from 'react';
import leftImage from '../assets/leftimage.jpg';
import rightImage from '../assets/rightimage.jpg';
import '../landingPage.css';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-3/5 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${leftImage})` }}></div>
      </div>
      <div className="w-2/5 relative">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${rightImage})` }}>
          <button className="absolute top-4 right-4 bg-yellow-600 text-white px-4 py-2 rounded-md">Join Waitlist</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
