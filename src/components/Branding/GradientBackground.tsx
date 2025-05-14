"use client";
import {
  motion,
} from "motion/react";


export default function GradientBackground() {
  return (
    <motion.div
      style={{
        filter: "blur(100px)",
        background: `
         radial-gradient(circle at 50% 50%, #111111, transparent 70%) 0 0 / 100% 100% no-repeat,
         radial-gradient(circle at 50% 100%, blue, transparent 70%) 0 0 / 100% 100% no-repeat
      `,
      }}
      className={"absolute z-0 top-0 left-0 h-full w-full"}
    ></motion.div>
  );
}
