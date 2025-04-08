import React from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Mugcoffee } from "./Mugcoffee";

const MugcoffeeContainer = () => {
  return (
      <Canvas>
        <Suspense fallback="loading...">
          <Stage environment="dawn" intensity={10}>
            <Mugcoffee />
          </Stage>
          <OrbitControls enableZoom={true} autoRotate />
          <PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
        </Suspense>
      </Canvas>
    );
}

export default MugcoffeeContainer