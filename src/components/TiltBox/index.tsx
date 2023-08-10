import { animated, useSpring } from "@react-spring/three";
import { Box } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { config } from "react-spring";

interface TiltBoxProps {
   color: string;
   size: any;
   position: any;
   xys: any;
   hoverXys: any;
   onClick?: (event: ThreeEvent<MouseEvent>) => void;
}

const TiltBox: React.FC<TiltBoxProps> = ({ color, size, position, xys, hoverXys, onClick }) => {
   const [springProps, setSpring] = useSpring<any>(() => ({
      xys: xys,
      config: config.wobbly,
   }));

   const handleMouseMove = () => {
      setSpring({ xys: hoverXys });
   };

   const handleMouseLeave = () => {
      setSpring({ xys: xys });
   };

   return (
      <animated.mesh
         position={position}
         onPointerMove={handleMouseMove}
         onPointerOut={handleMouseLeave}
         onClick={onClick}
         // @ts-ignore
         scale={springProps.xys.to((x, y, s) => [s, s, s])}
         // @ts-ignore
         rotation={springProps.xys.to((x, y) => [y * 0.6, x * 0.6, 0])}
         castShadow
         receiveShadow
      >
         <Box args={size} castShadow receiveShadow>
            <meshStandardMaterial attach="material" color={color} />
         </Box>
      </animated.mesh>
   );
};

export default TiltBox;
