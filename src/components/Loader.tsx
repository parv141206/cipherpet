"use client";

import { Html, useProgress } from "@react-three/drei";
import { motion } from "motion/react";

export function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: progress >= 100 ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold">
            Loading {Math.floor(progress)}%
          </div>
          <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-gray-800">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: progress >= 100 ? 2 : 0,
              }}
            />
          </div>
        </div>
      </motion.div>
    </Html>
  );
}
