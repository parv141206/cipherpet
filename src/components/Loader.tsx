"use client";

import React from "react";

export function Loader({ size = 20 }: { size?: number }) {
  const faceZ = size / 2;

  const faceTransforms = [
    { transform: `rotateY(0deg) translateZ(${faceZ}px)` },   // Front
    { transform: `rotateY(180deg) translateZ(${faceZ}px)` }, // Back
    { transform: `rotateY(90deg) translateZ(${faceZ}px)` },  // Right
    { transform: `rotateY(-90deg) translateZ(${faceZ}px)` }, // Left
    { transform: `rotateX(90deg) translateZ(${faceZ}px)` },  // Top
    { transform: `rotateX(-90deg) translateZ(${faceZ}px)` }, // Bottom
  ];

  const sizePx = `${size}px`;

  return (
    <div className="flex items-center justify-center h-40">
      <div className="perspective-800" style={{ perspective: 800 }}>
        <div
          className="relative animate-spinCube"
          style={{
            width: sizePx,
            height: sizePx,
            transformStyle: "preserve-3d",
          }}
        >
          {faceTransforms.map((style, i) => (
            <div
              key={i}
              className="absolute flex items-center justify-center border border-accent text-accent text-xs font-bold"
              style={{
                ...style,
                width: sizePx,
                height: sizePx,
              }}
            >
              <span></span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spinCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        .animate-spinCube {
          animation: spinCube 3s infinite linear;
        }
      `}</style>
    </div>
  );
}
