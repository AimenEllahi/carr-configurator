import { PresentationControls, Stage } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { Suspense } from "react";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Experience = () => {
   const gltf = useLoader(GLTFLoader, '/models/car.glb')
  


    return (
        
     
            <Suspense fallback={null}>
            <primitive object={gltf.scene} />

            </Suspense>
            
             

    
     
    );
};

export default Experience;


