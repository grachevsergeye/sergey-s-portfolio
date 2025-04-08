import React from 'react'
import { useGLTF } from '@react-three/drei'

export function PizzaModel(props) {
  const { nodes, materials } = useGLTF('/pizza.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.9, 1.3, 0.321]} scale={0.442}>
        <mesh geometry={nodes.Model_material0_0.geometry} material={materials.material0} rotation={[-Math.PI, 0, 0.1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/pizza.glb')
