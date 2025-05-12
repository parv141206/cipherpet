/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { AnimatedLetters } from "~/components/Branding/AnimatedLetters";

export default function About() {
  const [isMobile, setIsMobile] = React.useState(false);
  const hero = useRef(null);
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start end", "end start"],
  });
  const adjustedScale = useTransform(scrollYProgress, (value) => value + 0.5);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.main
      initial={{ filter: "blur(40px)" }}
      animate={{ filter: "blur(0px)" }}
      //exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center gap-10 text-white"
      style={{
        position: "relative",
        height: "100vh",
        // width: "100vw",
        overflow: "hidden",
      }}
    >
      <AnimatedLetters
        title={true}
        text="Made  with  ♡  by  parv14206"
        withBlur={true}
        center
        className="font-title items-center justify-center text-center"
      />
      <div className="flex gap-10">
        <Link href="https://github.com/parv141206" target="_blank">
          <FaGithub className="text-3xl transition hover:text-gray-500" />
        </Link>
        <Link href="https://instagram.com/calligraphic_parv" target="_blank">
          <FaInstagram className="text-3xl transition hover:text-gray-500" />
        </Link>
        <Link href="mailto:parv141206@gmail.com" target="_blank">
          <FaEnvelope className="text-3xl transition hover:text-gray-500" />
        </Link>
      </div>
    </motion.main>
  );
}
