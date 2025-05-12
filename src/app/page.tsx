/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Cube } from "~/components/Branding/Cube";
import { motion } from "motion/react";
import Encryption from "~/components/Branding/Encryption";
import Decryption from "~/components/Branding/Decryption";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { TextComponent } from "~/components/Branding/TextComponent";
import type * as THREE from "three";
import { Loader } from "~/components/Loader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const [mesh, setMesh] = useState<THREE.Object3D | null>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!mesh) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    //Start at center, shrink slightly and move right
    tl.to(mesh.scale, {
      x: 0.4,
      y: 0.4,
      z: 0.4,
      ease: "none",
    });
    tl.to(
      mesh.position,
      {
        x: 2.5,
        y: 0.1,
        ease: "none",
      },
      "<",
    );

    //Stay small, move left
    tl.to(mesh.position, {
      x: -1.5,
      y: -0.5,
      ease: "none",
      opacity: 0.5,
    });

    //After reaching left, grow back to original size
    tl.to(mesh.scale, {
      x: 0.6,
      y: 0.6,
      z: 0.6,
      ease: "none",
    });

    //Then return to center
    tl.to(mesh.position, {
      x: 0,
      y: 0,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, [mesh]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxOpacityDistance = window.innerHeight * 0.5;
      const newOpacity = Math.max(1 - scrollTop / maxOpacityDistance, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      ref={containerRef}
      className="gap-3 p-3 md:container md:mx-auto md:p-10"
    >
      <section className="fixed top-0 left-0 z-[-1] flex h-[100vh] w-screen flex-col items-center justify-center md:w-auto">
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(70px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1.5,
          }}
          className="md:h-[100vh] md:w-[100vw]"
        >
          <Canvas
            gl={{
              powerPreference: "high-performance",
              preserveDrawingBuffer: false,
              failIfMajorPerformanceCaveat: false,
              antialias: true,
            }}
            shadows={false}
          >
            <directionalLight intensity={3} position={[0, 3, 2]} />
            <PerspectiveCamera makeDefault fov={30} position={[0, 0, 6]} />
            <Environment preset="city" />
            <TextComponent opacity={opacity} /> <Cube setMeshRef={setMesh} />
            <Loader />
          </Canvas>
        </motion.div>
      </section>
      <div className="flex h-[80vh] items-center justify-center"></div>

      <section id="encryption-section" className="min-h-[120vh] py-20">
        <Encryption />
      </section>

      <section id="decryption-section" className="min-h-screen py-20">
        <Decryption />
      </section>
      <div className="relative flex h-[80vh] flex-col items-center justify-center gap-5">
        <div className="font-title text-9xl">Get Started!</div>
        <div className="text-xl">Create a key to get started!</div>
      </div>
    </motion.main>
  );
}
