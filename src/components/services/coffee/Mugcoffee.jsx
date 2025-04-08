import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Mugcoffee(props) {
  const { nodes, materials } = useGLTF('/coffee.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Black_Paper_material} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.glass_material} />
      </group>
    </group>
  )
}

useGLTF.preload('/coffee.glb')