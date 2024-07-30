import { Canvas } from "@react-three/fiber";
import { Dinosaur } from "./Dinosaur";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import React,{ Suspense } from "react";

const DinosaurWrapper: React.FC = () => {
  return (
    <Canvas className="select-none bg-transparent">
      <OrbitControls
        minPolarAngle={1.3}
        maxPolarAngle={1.3}
        autoRotate={true}
        enableZoom={false}
        enablePan={false}
      />
      <ambientLight />
      <Suspense fallback={null}>
        <Dinosaur />
      </Suspense>
      <Environment preset="dawn" />
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

export default DinosaurWrapper
