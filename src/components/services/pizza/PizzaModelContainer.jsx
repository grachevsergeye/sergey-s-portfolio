import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PizzaModel } from "./PizzaModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const PizzaModelContainer = () => {
  return (
    <Canvas>
    <Suspense fallback="loading...">
      <Stage environment="dawn" intensity={0.5}>
        <PizzaModel />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
      <PerspectiveCamera position={[0,1,1.2]} zoom={0.9} makeDefault/>
    </Suspense>
  </Canvas>
);
}

export default PizzaModelContainer;