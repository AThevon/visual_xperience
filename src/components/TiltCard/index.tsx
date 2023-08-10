import { useSpring, animated } from "react-spring";

interface TiltCardProps {
   children: React.ReactNode;
   className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ( { children, className } ) => {
   const [props, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: { mass: 8, tension: 850, friction: 40 },
   }));

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (x - centerX) / centerX;
      const tiltY = (y - centerY) / centerY;
      set({ xys: [tiltX, tiltY, 1.04] });
   };

   const handleMouseLeave = () => {
      set({ xys: [0, 0, 1] });
   };

   return (
      <animated.div
         className={className}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{
            transform: props.xys.to(
               (x, y, s) =>
                  `perspective(600px) rotateX(${y * 10}deg) rotateY(${
                     x * 10
                  }deg) scale(${s})`
            ),
         }}
      >
         {children}
      </animated.div>
   );
};

export default TiltCard;
