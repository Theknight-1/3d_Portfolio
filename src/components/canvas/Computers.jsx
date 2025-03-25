/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={20} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.65}
        position={isMobile ? [0, -4, -1.2] : [0, -3.0, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isLoaded) {
        setLoadingError(true);
      }
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timeout);
  }, [isLoaded]);

  return loadingError ? (
    <div>.</div>
  ) : (
    <Canvas
      frameloop="demand"
      className="hidden lg:block"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={() => setIsLoaded(true)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
