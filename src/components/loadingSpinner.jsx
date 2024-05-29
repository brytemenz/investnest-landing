// src/pages/LoadingSpinner.jsx
import React from 'react';
import { CircleLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CircleLoader color="#FFC107" />
    </div>
  );
};

export default LoadingSpinner;
