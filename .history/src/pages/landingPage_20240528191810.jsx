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
      <div className="w-2/5 relative flex flex-col justify-end">
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${rightImage})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-between items-start text-white px-8">
            <div className="mt-8 text-left">
              <h2 className="text-3xl font-bold mb-4">Welcome <br/>to the forefront of real estate <br/>investing innovation!</h2>
            </div>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-md font-bold mt-4 mr-4 self-end">Join Waitlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
