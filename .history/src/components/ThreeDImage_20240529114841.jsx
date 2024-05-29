// src/components/ThreeDImage.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ARButton, VRButton } from '@react-three/drei';
import { ARCanvas, VRCanvas, DefaultXRControllers } from '@react-three/xr';
import * as THREE from 'three';

const RotatingModel = ({ modelUrl }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotate the model
    }
  });

  return (
    <mesh ref={meshRef}>
      <primitive object={new THREE.GLTFLoader().load(modelUrl)} />
    </mesh>
  );
};

const ThreeDImage = ({ modelUrl, mode }) => {
  const CanvasComponent = mode === 'vr' ? VRCanvas : ARCanvas;

  return (
    <CanvasComponent style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingModel modelUrl={modelUrl} />
      <OrbitControls />
      <DefaultXRControllers />
    </CanvasComponent>
  );
};

export default ThreeDImage;
