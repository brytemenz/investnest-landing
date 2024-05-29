import React from 'react';
import { Button } from 'antd';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to InvestNest!</h1>
        <Button type="primary">Get Started</Button>
      </div>
    </div>
  );
};

export default App;
