/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 ./cat.gltf 
Author: Katuwa_2002 (https://sketchfab.com/Katuwa_2002)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/cat-minimalistic-voxel-64534d9ade6b4be7861c1fa2ad67063c
Title: Cat minimalistic voxel
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Cat(props) {
  const { nodes, materials } = useGLTF('/models/cat/cat.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.palette} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload("/models/cat/cat.gltf");