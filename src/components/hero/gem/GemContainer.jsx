import React from 'react'
import { GemModel } from './Gem';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const GemContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="forest" intensity={0.5}>
          <GemModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  );
}

export default GemContainer