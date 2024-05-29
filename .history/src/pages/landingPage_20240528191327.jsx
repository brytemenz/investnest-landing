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
        <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${rightImage})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-start items-end text-white px-8">
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-md font-bold mt-8 mr-8">Join Waitlist</button>
            <div className="text-right">
              <h2 className="text-3xl font-bold mb-4">Welcome</h2>
              <p className="text-lg text-center mb-6">to the forefront of real estate investing innovation!</p>
              <p className="text-lg mb-6">We are thrilled to introduce a groundbreaking software platform that is poised to redefine the dynamics of the real estate industry. Our platform represents a quantum leap forward in how property owners and investors collaborate, unlocking the full potential of real estate projects in a way that was previously unimaginable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
