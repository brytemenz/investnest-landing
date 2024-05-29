// src/pages/LandingPage.jsx
import React from 'react';
import { Button } from 'antd';
import '../landingPage.css;

const LandingPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute top-0 left-0 w-1/2 h-full parallax parallax-left" style={{ backgroundImage: "url('https://source.unsplash.com/random/800x600')" }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full parallax parallax-right" style={{ backgroundImage: "url('https://source.unsplash.com/random/801x601')" }}></div>
      <div className="relative z-10 p-8 bg-white bg-opacity-75 rounded-lg shadow-lg max-w-lg mx-auto text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Welcome to InvestNest</h1>
        <p className="text-xl mb-8">Your investment journey begins here.</p>
        <Button type="primary" size="large">Get Started</Button>
      </div>
    </div>
  );
};

export default LandingPage;
