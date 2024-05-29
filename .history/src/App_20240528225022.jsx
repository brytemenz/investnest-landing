// App.jsx
import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic loading process
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? <LoadingSpinner /> : <LandingPage />}
    </>
  );
};

export default App;
