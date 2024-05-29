// src/components/ThreeDImage.jsx
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const RotatingModel = ({ modelUrl }) => {
  const meshRef = useRef();
  const { scene } = useGLTF(modelUrl);

  useFrame(() => {
    // if (meshRef.current) {
    //   meshRef.current.rotation.y += 0.01; // Rotate the model
    // }
  });

  return <primitive ref={meshRef} object={scene} />;
};

const ThreeDImage = ({ modelUrl }) => {
  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <RotatingModel modelUrl={modelUrl} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDImage;
