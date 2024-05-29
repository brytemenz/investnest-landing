// src/pages/LandingPage.jsx
import React from 'react';
import leftImage from '../assets/leftimage.jpg';
import rightImage from '../assets/rightimage.jpg';
import '../landingPage.css';

const LandingPage = () => {
  return (
    <div className="relative flex min-h-screen">
      <div className="w-1/2 parallax parallax-left" style={{ backgroundImage: `url(${leftImage})` }}></div>
      <div className="w-1/2 parallax parallax-right" style={{ backgroundImage: `url(${rightImage})` }}></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-8 bg-white bg-opacity-75 rounded-lg shadow-lg max-w-lg mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-500 mb-4">Welcome to InvestNest</h1>
          <p className="text-xl mb-8">Your investment journey begins here.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
