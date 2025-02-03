"use client";

import React, { useEffect } from "react";
import { useGLTF, Decal, useTexture } from "@react-three/drei";
import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";
import { degToRad } from "three/src/math/MathUtils";

const Hoodie = ({ scale, color , selectedLogo }) => {

  console.log(selectedLogo.src,"selectedLogo")

  const { nodes } = useGLTF("/Hoodie.glb");

  const logo = useTexture(selectedLogo.src);


  // Create a new material instance with the selected color
  const coloredMaterial = new MeshPhysicalMaterial({
    color,
    roughness: 0.5, // Adjust surface reflection
    metalness: 0.1, // Makes it more fabric-like
  });

  return (
    <group dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          scale={scale}
          material={coloredMaterial}
        >
          {/* Apply the logo decal on the front */}
          <Decal
            // debug
            position={[0.1, 0.12, 1.5]} // Adjust front position      z-axis x-axis  y-axis
            rotation={[0, degToRad(90), degToRad(90)]} // Ensure it's facing forward
            scale={[0.1, 0.1, 0.5]} // Adjust logo size  x  y z
            map={logo}
          >
            <MeshPhysicalMaterial
              transparent
              map={logo}
              depthTest={false} // Prevents z-fighting
              polygonOffset
              polygonOffsetFactor={-1}
              roughness={0.5} // Adjust for shininess
              metalness={0.1} // Adds slight metallic effect
            />
          </Decal>
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          scale={scale}
          material={coloredMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          scale={scale}
          material={coloredMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          scale={scale}
          material={coloredMaterial}
        />
      </group>
    </group>
  );
};

export default Hoodie;

// Preload the model
useGLTF.preload("/Hoodie.glb");
