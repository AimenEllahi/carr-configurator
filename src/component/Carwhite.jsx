/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 public/models/Carwhite.gltf
*/

import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF, PresentationControls } from '@react-three/drei'

export function Carwhite(props) {
  const { nodes, materials } = useGLTF('./models/Carwhite.gltf')
  // useLayoutEffect(() => {
  //   Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true))
   
  // }, [nodes, materials])
  
  return (
    <group scale={[1.5,1.5,1.5]} position={[0,-1.5,-2]} rotation={[0, .5, 0]} {...props} dispose={null}>
      <group position={[-0.84, 0.374, -1.39]}>
        <mesh geometry={nodes.Mesh_26.geometry} material={materials.Material_29} position={[0.82, -0.374, 1.371]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
      <group position={[-0.84, 0.374, -1.39]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Mesh_27_1.geometry} material={materials.Tyre} />
          <mesh geometry={nodes.Mesh_27_2.geometry} material={materials['Wheel rim']} />
          <mesh geometry={nodes.Mesh_27_3.geometry} material={materials['Material.002']} />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh_3_1.geometry} material={materials.Material_1} />
        <mesh geometry={nodes.Mesh_3_2.geometry} material={materials.Material_4} />
        <mesh geometry={nodes.Mesh_3_3.geometry} material={materials.Material_5} />
        <mesh geometry={nodes.Mesh_3_4.geometry} material={materials.Material_8} />
      </group>
      <mesh geometry={nodes.Mesh_3001.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Mesh_3002.geometry} material={materials.Glass} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <group position={[0.94, 0, 0.72]}>
        <mesh geometry={nodes.Mesh_10.geometry} material={materials['Car Body ']} position={[0.001, 0.804, -0.005]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
        <group position={[0.001, 0.804, -0.005]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Mesh_11_1.geometry} material={materials.Material_11} />
          <mesh geometry={nodes.Mesh_11_2.geometry} material={materials.Material_7} />
        </group>
      </group>
      <group position={[-0.94, 0, 0.72]}>
        <mesh geometry={nodes.Mesh_6.geometry} material={materials['Car Body ']} position={[0.94, 0, -0.72]} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh_14_1.geometry} material={materials['Car Body ']} />
        <mesh geometry={nodes.Mesh_14_2.geometry} material={materials['Car Body upper black part']} />
      </group>
      <mesh geometry={nodes.Mesh_15.geometry} material={materials['Black Material']} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Mesh_15001.geometry} material={materials['Black Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Mesh_16.geometry} material={materials['Black Material']} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Mesh_17.geometry} material={materials.Glass} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('./models/Carwhite.gltf')



