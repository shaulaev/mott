import { Canvas } from "@react-three/fiber";
import { Dinosaur } from "./Dinosaur";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import React,{ Suspense } from "react";

interface props {
  children: React.ReactNode,
  orbit?: Object
}

const ThreeWrapper: React.FC<props> = ({ children, orbit }) => {
  return (
    <Canvas className="select-none bg-transparent">
      <OrbitControls
        {...orbit}
        enablePan={false}
      />
      <ambientLight />
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="apartment" />
      <ContactShadows
        position={[0, -2, 0]}
        scale={10}
        opacity={1}
        blur={2}
        far={10}
        resolution={256}
        color={"#000"}
      />
    </Canvas>
  );
};

export default ThreeWrapper;
