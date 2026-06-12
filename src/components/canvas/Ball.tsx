import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl]);

  // Mobile GPUs often render decal textures upside down / mirrored
  // without this. Setting it explicitly avoids relying on defaults.
  decal.flipY = false;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // @ts-expect-error
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        // 'low-power' avoids hitting the discrete-GPU / context budget
        // some Android browsers enforce for multiple <canvas> elements
        powerPreference: "low-power",
        antialias: true,
        alpha: true,
      }}
      // helps avoid a blank canvas on some mobile WebGL drivers
      // that fail silently on the very first context creation
      onCreated={({ gl }) => {
        gl.setClearAlpha(0);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enablePan={false} enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;