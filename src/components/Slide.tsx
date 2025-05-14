"use client";

import { motion } from "motion/react";
import React from "react";

type SlideProps = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
};

const Slide: React.FC<SlideProps> = ({
  children,
  direction = "left",
  duration = 1,
  delay = 0,
  className = "",
}) => {
  const getOffset = () => {
    switch (direction) {
      case "left":
        return { x: -20, y: 0 };
      case "right":
        return { x: 20, y: 0 };
      case "up":
        return { x: 0, y: -20 };
      case "down":
        return { x: 0, y: 20 };
      default:
        return { x: -20, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        ...offset,
        opacity: 0,
        filter: "blur(20px)",
      }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
