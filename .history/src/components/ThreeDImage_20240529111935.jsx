// src/components/ThreeDImage.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const RotatingModel = ({ modelUrl }) => {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF(modelUrl);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotate the model
    }
  });

  return (
    <mesh ref={meshRef} geometry={nodes.model.geometry} material={materials.material}>
      <primitive object={nodes.model} />
    </mesh>
  );
};

const ThreeDImage = ({ modelUrl }) => {
  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingModel modelUrl={modelUrl} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDImage;
