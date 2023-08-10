import styles from "./scene3d.module.scss";
import {
   Environment,
   Float,
   OrbitControls,
   PerspectiveCamera,
   useEnvironment,
} from "@react-three/drei";

import { TeaMug } from "@/3dModels/TeaMug";
import { Ground } from "@/3dModels/Ground";
import TiltBox from "../TiltBox";

const Scene3d: React.FC = () => {
   const envMap = useEnvironment({ files: "/neon_photostudio_4k.hdr" });

   return (
      <>
         <Environment map={envMap} background="only" />

         <PerspectiveCamera makeDefault position={[-4, 2, 4]} fov={50} />
         <OrbitControls />

         <TiltBox
            color="#fff"
            size={[1, 1, 1]}
            position={[-6, 3, -2]}
            xys={[0, 0, 1]}
            hoverXys={[2, 2, 1.1]}
         />
         <TiltBox
            color="#f9f9f9"
            size={[1, 1, 1]}
            position={[-4, 2.5, -1.9]}
            xys={[0, 0, 1]}
            hoverXys={[-1.4, -1.2, 1.1]}
         />
         <TiltBox
            color="#f9f9f9"
            size={[1, 1, 1]}
            position={[-2, 3.2, -2.2]}
            xys={[0, 0, 1]}
            hoverXys={[-1.8, 2.2, 1.1]}
         />

         {/* <Float
            position={[0, 3, 2]}
            speed={5}
            rotationIntensity={0.3}
            floatIntensity={0.6}
         >
            <TeaMug />
         </Float> */}

         <TeaMug />
         <Ground />

         <ambientLight />
         <pointLight position={[1, 5, 0]} intensity={4} castShadow />
         <directionalLight position={[5, 10, 8]} intensity={1.5} castShadow />
      </>
   );
};

export default Scene3d;
