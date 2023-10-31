import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}  className="mt-3">
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color='lightgreen'
          polygonOffset
          polygonOffsetFactor={-1}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, index, name }) => {
  return (
    <>
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={index * Math.PI} />
          <Ball imgUrl={icon} name={name}/>
        </Suspense>
        <Preload all />
      </Canvas>
      <p className="text-center">{name}</p>
    </>
  );
};

export default BallCanvas;