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
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-start items-start text-white px-8">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold mt-4 mr-4 self-end">Join Waitlist</button>
            <div className="mt-24 text-left"> {/* Increased mt-8 to mt-24 */}
              <h2 className="text-3xl font-bold mb-4">Welcome <br/><span className='text-yellow-500'>to the forefront of real estate </span><br/>investing innovation!</h2>
              <p className="text-sm mt-12">We are thrilled to introduce a groundbreaking software platform that is poised to redefine the dynamics of the real estate industry. Our platform represents a quantum leap forward in how property owners and investors collaborate, unlocking the full potential of real estate projects in a way that was previously unimaginable.</p> {/* Increased mt-8 to mt-12 */}
              <div className="mt-8"> {/* Adjusted margin */}
                <input type="email" placeholder="Enter your email" className="border-b-2 border-white bg-transparent text-white placeholder-white::placeholder px-4 py-2 focus:outline-none focus:border-yellow-500"/>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold ml-2">Join the Waitlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
