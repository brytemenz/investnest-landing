import React, { useState, useEffect } from 'react';
import rightImage from '../assets/rightimage.jpg';
import { Button, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import LoadingSpinner from '../components/loadingSpinner';
import ThreeDImage from '../components/ThreeDImage';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [show3DModel, setShow3DModel] = useState(false);
  const [viewMode, setViewMode] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleView3DModel = (mode) => {
    setShow3DModel(true);
    setViewMode(mode);
  };

  return (
    <div className={`landing-page ${isLoading ? '' : 'loaded'}`}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 relative">
            {show3DModel ? (
              <ThreeDImage modelUrl="/room.glb" mode={viewMode} />
            ) : (
              <div className="h-full relative">
                <div className="left-image">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4">
                    <Button
                      onClick={() => handleView3DModel('vr')}
                      className="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold mt-80 mr-4 self-center transition duration-300 ease-in-out hover:text-gold"
                    >
                      View in room VR
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-2/5 relative flex flex-col justify-end">
            <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${rightImage})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-start items-start text-white px-8">
                <div className="mt-24 text-left">
                  <h2 className="text-3xl font-bold mb-4">Welcome <br /><span className='text-yellow-500'>to the forefront of real estate </span><br />investing innovation!</h2>
                  <p className="text-sm mt-12">We are thrilled to introduce a groundbreaking software platform that is poised to redefine the dynamics of the real estate industry. Our platform represents a quantum leap forward in how property owners and investors collaborate, unlocking the full potential of real estate projects in a way that was previously unimaginable.</p>
                  <div className="mt-20 flex justify-center">
                    <Input placeholder="Enter your email" className="border-b-2 border-white bg-transparent text-white placeholder-white::placeholder px-4 py-2 focus:outline-none focus:border-yellow-500" />
                    <Button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold ml-2 hover:text-gold">Join the Waitlist</Button>
                  </div>
                </div>
                <div className="text-sm mt-8 flex items-center justify-center mx-auto">
                  <p className="mr-4">www.investnest.net | Email: info@investnest.net | Contacts: 0209156282 / 0506154295</p>
                  <div className="text-yellow">
                    <FontAwesomeIcon icon={faFacebook} className="mr-2 cursor-pointer hover:text-gold" />
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2 cursor-pointer hover:text-gold" />
                    <FontAwesomeIcon icon={faInstagram} className="mr-2 cursor-pointer hover:text-gold" />
                    <FontAwesomeIcon icon={faTwitter} className="mr-2 cursor-pointer hover:text-gold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
