// src/components/ThreeDImage.jsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, VRButton } from '@react-three/drei';
import { VRCanvas } from '@react-three/xr';
import { VRButton } from '@react-three/xr';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';

const RotatingModel = ({ modelUrl }) => {
  const meshRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      meshRef.current.add(gltf.scene);
    });
  }, [modelUrl]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotate the model
    }
  });

  return (
    <mesh ref={meshRef} />
  );
};

const ThreeDImage = ({ modelUrl, mode }) => {
  useEffect(() => {
    if (mode === 'ar') {
      const button = ARButton.createButton(THREE.WebXRManager);
      document.body.appendChild(button);
      return () => {
        document.body.removeChild(button);
      };
    }
  }, [mode]);

  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingModel modelUrl={modelUrl} />
      <OrbitControls />
      {mode === 'vr' && <VRButton />}
    </Canvas>
  );
};

export default ThreeDImage;
