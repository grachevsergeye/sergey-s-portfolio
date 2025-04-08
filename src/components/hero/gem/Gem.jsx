import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function GemModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/gem.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="5a43a134a3fb4f44af38bb586ccd45e7fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Diamond" position={[0, 35.802, -13.031]} rotation={[1.222, 0, Math.PI]} scale={2.54}>
                  <mesh name="Diamond_Crystal_0" geometry={nodes.Diamond_Crystal_0.geometry} material={materials.Crystal} />
                </group>
                <group name="LIghts" rotation={[0, -1.185, 0]}>
                  <group name="spotLight3" position={[125.558, 603.332, -663.199]} rotation={[-2.4, 0.14, 3.015]} />
                  <group name="spotLight1" position={[229.898, 152.791, -361.732]} rotation={[1.865, 0.185, -2.597]}>
                    <group name="Object_12" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_13" />
                    </group>
                  </group>
                  <group name="spotLight2" position={[-79.082, 289.526, 557.696]} rotation={[-0.475, -0.124, -0.064]} />
                  <group name="spotLight4" position={[-318.583, -336.058, -443.492]} rotation={[2.488, -0.523, 2.776]} />
                </group>
                <group name="back" position={[-0.106, 3.896, -100.1]} rotation={[0, -Math.PI / 2, 0]}>
                  <group name="Object_5" />
                </group>
                <group name="left" position={[-100.116, 1.822, -0.16]}>
                  <group name="Object_7" />
                </group>
                <group name="mentalrayIbl1" scale={33055.25} />
                <group name="pointLight1" position={[0, 18.387, 0]}>
                  <group name="Object_19" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_20" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/gem.glb')
