import { Plane, useTexture } from "@react-three/drei";
import { LinearSRGBColorSpace } from "three";

export const Ground = () => {
   const terrainTextures = useTexture({
      map: "/textures/dark_wooden_planks_diff_2k.jpg",
      displacementMap: "/textures/dark_wooden_planks_disp_2k.jpg",
      aoMap: "/textures/dark_wooden_planks_arm_2k.jpg",
      roughnessMap: "/textures/dark_wooden_planks_arm_2k.jpg",
      metalnessMap: "/textures/dark_wooden_planks_arm_2k.jpg",
      normalMap: "/textures/dark_wooden_planks_nor_gl_2k.jpg",
   });

   return (
      <Plane
         args={[40, 40, 8, 8]}
         rotation-x={-Math.PI / 2}
         position-x={-0.5}
         receiveShadow
         castShadow
      >
         <meshStandardMaterial
            {...terrainTextures}
            normalMap-colorSpace={LinearSRGBColorSpace}
         />
      </Plane>
   );
};
