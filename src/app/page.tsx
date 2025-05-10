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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const [mesh, setMesh] = useState<THREE.Object3D | null>(null);
  const [opacity, setOpacity] = useState(1); // State to manage opacity based on scroll

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
      x: 0.9,
      y: 0.9,
      z: 0.9,
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
    });

    //After reaching left, grow back to original size
    tl.to(mesh.scale, {
      x: 1,
      y: 1,
      z: 1,
      ease: "none",
    });

    //Then return to center
    tl.to(mesh.position, {
      x: 0,
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
    <main
      ref={containerRef}
      className="gap-3 p-3 md:container md:mx-auto md:p-10"
    >
      <section className="fixed top-0 left-0 flex h-[100vh] flex-col items-center justify-center">
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
            duration: 5,
            ease: "easeOut",
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
            <TextComponent opacity={opacity} />{" "}
            {/* Pass opacity to TextComponent */}
            <Cube setMeshRef={setMesh} />
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
      <div className="flex h-[80vh] items-center justify-center"></div>
    </main>
  );
}
