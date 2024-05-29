import React, { useState, useEffect } from 'react';
import rightImage from '../assets/rightimage.jpg';
import { Button, Input } from 'antd';
import LoadingSpinner from '../components/loadingSpinner';
import ThreeDImage from '../components/ThreeDImage';
import Footer from '../components/Footer'; // Import the Footer component
import Lottie from 'react-lottie';
import animationData from '../assets/animie.json'; // Ensure the correct path to your Lottie JSON file

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

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="landing-page min-h-screen flex flex-col lg:flex-row">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="w-full lg:w-3/5 relative">
            {show3DModel ? (
              <ThreeDImage modelUrl="/room.glb" mode={viewMode} />
            ) : (
              <div className="h-full relative">
                <Lottie
                  options={lottieOptions}
                  height="100%"
                  width="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>
            )}
          </div>
          <div className="w-full lg:w-2/5 relative flex flex-col justify-end">
            <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${rightImage})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-start items-start text-white px-8">
                <div className="mt-32 text-left lg:text-center">
                  <h2 className="text-3xl font-bold mb-4">Welcome <br /><span className='text-yellow-500'>to the forefront of real estate </span><br />investing innovation!</h2>
                  <p className="text-sm mt-12">
                    We are thrilled to introduce a groundbreaking software platform that is poised to redefine the dynamics of the real estate industry. 
                    Our platform represents a quantum leap forward in how property owners and investors collaborate, unlocking the full potential of 
                    real estate projects in a way that was previously unimaginable.
                  </p>
                  <p className="text-sm mt-4">
                    Join us in reshaping the future of real estate investing. Whether you're a seasoned investor or just dipping your toes into the market, 
                    our platform offers unparalleled opportunities and insights to propel your success.
                  </p>
                  <div className="mt-20 flex justify-center">
                    <Input placeholder="Enter your email" className="border-b-2 border-white bg-zinc-800 text-white placeholder-white::placeholder px-4 py-2 focus:outline-none focus:border-yellow-500" />
                  </div>
                  <div className="mt-8 flex items-center justify-center">
                    <Button className="bg-yellow-500 text-black px-6 rounded-md font-bold self-center transition duration-300 ease-in-out hover:text-yellow-500" style={{ border: 'none' }}>Join the Waitlist</Button>
                  </div>
                </div>
                <Footer /> {/* Move the Footer component inside the content div */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
