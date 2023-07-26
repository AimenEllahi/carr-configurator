import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../App.css";
import { Carwhite } from "./Carwhite";
import ColorSelector from "./ColorSelector";
import * as THREE from "three";
import { useLayoutEffect } from "react";
import Loader from "./Loader";
import {
  AccumulativeShadows,
  RandomizedLight,
  useGLTF,
  Html,
  useProgress,
} from "@react-three/drei";

const MovingLight = () => {
  const lightRef = useRef();

  // Use the useFrame hook to update the light position on each frame
  useFrame((state, delta) => {
    if (lightRef.current) {
      // Update the light's position here
      // You can change the light's position based on time or any other parameter
      const time = state.clock.elapsedTime;
      const radius = 45;
      const xPos = radius * Math.cos(time * 0.5);
      const zPos = radius * Math.sin(time * 0.5);
      lightRef.current.position.set(xPos, 10, zPos);
    }
  });

  return (
    <>
      <pointLight ref={lightRef} intensity={0.8} color='white' />
      <pointLight
        ref={lightRef}
        intensity={0.8}
        color='white'
        position={[10, 10, 0]}
      />
    </>
  );
};

function Fcar(props) {
  const { scene, nodes, materials } = useGLTF("/models/Carwhite.gltf");

  useLayoutEffect(() => {
    Object.values(nodes).forEach(
      (node) => node.isMesh && (node.receiveShadow = node.castShadow = true)
    );
  }, [nodes, materials]);

  return (
    <primitive
      object={scene}
      {...props}
      scale={[1.5, 1.5, 1.5]}
      position={[-2.5, -1.15, -1]}
      rotation={[0, -0.5, 0]}
    />
  );
}

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

function SceneComponent() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas
        shadows
        camera={{ position: [5, 0, 15], fov: 30 }}
        shadowMap='pcfsoft'
      >
        <spotLight
          position={[0, 8, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={1}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.5} />

        <MovingLight />
        <Suspense fallback={<Loader />}>
          <AccumulativeShadows
            position={[0, -1.16, 0]}
            frames={100}
            alphaTest={0.9}
            scale={30}
          >
            <RandomizedLight
              amount={2}
              radius={10}
              ambient={0.5}
              position={[1, 5, -1]}
            />
          </AccumulativeShadows>
          <Carwhite />
        </Suspense>

        <CameraRig />
      </Canvas>
      <ColorSelector />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5rem",
          color: "#338895",
          fontSize: "1.8rem",
          fontWeight: "bold",
        }}
      >
        <span>Cayman</span>
      </div>
    </div>
  );
}

export default SceneComponent;
