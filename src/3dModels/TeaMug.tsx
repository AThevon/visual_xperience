import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function TeaMug(props: any) {
   const { nodes } = useGLTF("/gltf/teamugblend.gltf") as any;

   // Create your custom material
   const teaMugMaterial = new THREE.MeshStandardMaterial({
      color: "#fcfcfc",
      side: THREE.DoubleSide,
      roughness: 0.5,
   });

   return (
      <group {...props} dispose={null}>
         <mesh
            geometry={nodes.tea_mug.geometry}
            material={teaMugMaterial}
            position={[0, 1.51, -3]}
            rotation={[0, -1.8, 0]}
            castShadow
            receiveShadow
         />
      </group>
   );
}

useGLTF.preload("/gltf/teamugblend.gltf");
