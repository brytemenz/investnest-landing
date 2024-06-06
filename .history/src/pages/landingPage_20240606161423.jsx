import React, { useState, useEffect } from 'react';
import rightImage from '../assets/rightimage.jpg';
import { Button, Input, message } from 'antd';
import LoadingSpinner from '../components/loadingSpinner';
import ThreeDImage from '../components/ThreeDImage';
import Footer from '../components/footer'; // Ensure the import matches the component name
import emailjs from 'emailjs-com';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [show3DModel, setShow3DModel] = useState(false);
  const [viewMode, setViewMode] = useState(null);
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = () => {
    if (!email) {
      message.error('Please enter email address');
      return;
    }

    const templateParams = {
      user_email: email,
      from_name: 'New Investor',
      message: userMessage
    };

    emailjs.send('service_8mkirnz', 'template_6623vdd', templateParams, 'tySJqPuSBuoEdtfig')
      .then((response) => {
        message.success('Email successfully sent!');
        setEmail(''); // Clear the email input
      }, (error) => {
        message.error('Failed to send email, please try again later');
      });
  };

  return (
    <div className="landing-page min-h-screen flex flex-col lg:flex-row">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="w-full lg:w-3/5 relative flex flex-col justify-center items-center bg-gray-900">
            {show3DModel ? (
              <ThreeDImage modelUrl="/room.glb" mode={viewMode} />
            ) : (
              <div className="h-full relative w-full">
                <div className="left-image h-full flex flex-col justify-center items-center">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4">
                    <Button
                      onClick={() => handleView3DModel('vr')}
                      className="bg-yellow-500 text-black px-8 rounded-md font-bold mt-80 lg:mt-0 lg:self-center transition duration-300 ease-in-out hover:text-yellow-500"
                      style={{ border: 'none' }}
                    >
                      View Room in VR
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-2/5 relative flex flex-col justify-end bg-cover bg-center" style={{ backgroundImage: `url(${rightImage})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-start items-start text-white p-8">
              <div className="mt-32 text-left lg:text-center w-full">
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
                  <Input 
                    placeholder="Enter your email" 
                    className="border-b-2 border-white bg-zinc-800 text-white placeholder-white px-4 py-2 focus:outline-none focus:text-black border-yellow-500" 
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <Button 
                    className="bg-yellow-500 text-black px-6 rounded-md font-bold self-center transition duration-300 ease-in-out hover:text-yellow-500" 
                    style={{ border: 'none' }}
                    onClick={handleEmailSubmit}
                  >
                    Join the Waitlist
                  </Button>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
