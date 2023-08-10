"use client";

import { Suspense } from "react";
import styles from "./home.module.scss";
import { Canvas } from "@react-three/fiber";
import TeaMugScene from "@/components/Scene3d";



const Home = () => {

   return (
      <section className={styles.home}>
         <Suspense fallback={null}>
            <Canvas id="canvas" shadows>
               <TeaMugScene />
            </Canvas>
         </Suspense>
      </section>
   );
};

export default Home;
