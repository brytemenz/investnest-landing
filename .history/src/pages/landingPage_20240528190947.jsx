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
      <div className="w-2/5 relative flex flex-col justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="text-white text-center mx-auto max-w-md">
          <h2 className="text-3xl font-bold mb-4">Welcome</h2>
          <p className="text-lg">to the forefront of real estate investing innovation!</p>
          <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md">Join Waitlist</button>
        </div>
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${rightImage})` }}></div>
      </div>
    </div>
  );
};

export default LandingPage;
