/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Cube } from "~/components/Branding/Cube";
import { motion } from "motion/react";
import Features from "~/components/Branding/Features";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { TextComponent } from "~/components/Branding/TextComponent";
import { Loader } from "~/components/Loader";
import Introduction from "~/components/Branding/Introduction";
import SupportedTechniques from "~/components/Branding/SupportedTechniques";
import Link from "next/link";
import Button from "~/components/Button";
import GradientBackground from "~/components/Branding/GradientBackground";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxOpacityDistance = window.innerHeight * 0.5;
      const newOpacity = Math.max(1 - scrollTop / maxOpacityDistance, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

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
      className=""
    >
      <div className={"gap-3 p-3 md:container md:mx-auto md:p-10"}>
        <section className="top-0 left-0 z-[-1] flex h-[75vh] w-full items-center justify-center">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(70px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
              className="flex h-full w-full flex-col items-center justify-center"
            >
              {/* <Canvas
              gl={{
                powerPreference: "high-performance",
                antialias: true,
                preserveDrawingBuffer: false,
                failIfMajorPerformanceCaveat: false,
              }}
              shadows={false}
            >
              <directionalLight intensity={3} position={[0, 3, 2]} />
              <PerspectiveCamera makeDefault fov={30} position={[0, 0, 6]} />
              <Environment preset="city" />
              <TextComponent opacity={opacity} />
              <Cube />
              <Loader />
            </Canvas> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(70px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              <div className="text-3xl">
                🔐 Dive into the world of encipherment — and make it fun! 🎉
              </div>
            </motion.div>
          </div>
        </section>
        <div className="md:p-10">
          <section id="encryption-section" className="py-20">
            <Introduction />
          </section>

          <section id="decryption-section" className="min-h-screen py-20">
            <Features />
          </section>
          <section id="decryption-section" className="min-h-screen py-20">
            <SupportedTechniques />
          </section>
        </div>
      </div>

      <div className="relative  flex h-[100%] py-80 flex-col items-center justify-center gap-5">
        <GradientBackground />
        <div className="font-title relative z-30 text-9xl">Get Started for free!</div>
        <Link href={"/techniques"}>
          <Button scale={"medium"} />
        </Link>
      </div>
    </motion.main>
  );
}
