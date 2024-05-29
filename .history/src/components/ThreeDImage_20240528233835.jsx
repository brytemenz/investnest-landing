// src/components/ThreeDImage.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ThreeDImage = ({ imageUrl }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotate the image
    }
  });

  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <planeBufferGeometry attach="geometry" args={[5, 3]} />
        <meshBasicMaterial attach="material">
          <primitive attach="map" object={new THREE.TextureLoader().load(imageUrl)} />
        </meshBasicMaterial>
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDImage;
