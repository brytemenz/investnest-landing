// src/components/ThreeDImage.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const FixedModel = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
};

const ThreeDImage = ({ modelUrl }) => {
  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <FixedModel modelUrl={modelUrl} />
      </Suspense>
      <OrbitControls enableRotate={true} enablePan={false} />
    </Canvas>
  );
};

export default ThreeDImage;
