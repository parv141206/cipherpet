// /* eslint-disable @typescript-eslint/no-unsafe-member-access */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// "use client";
// import { Canvas } from "@react-three/fiber";
// import React, { useEffect, useRef, useState } from "react";
// import { Cube } from "~/components/Branding/Cube";
// import { motion } from "motion/react";
// import Encryption from "~/components/Branding/Encryption";
// import Decryption from "~/components/Branding/Decryption";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Environment, PerspectiveCamera } from "@react-three/drei";
// import { TextComponent } from "~/components/Branding/TextComponent";
// import type * as THREE from "three";

// // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const containerRef = useRef(null);
//   const [mesh, setMesh] = useState<THREE.Object3D | null>(null);
//   useEffect(() => {
//     if (!mesh) return;

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//       },
//     });

//     tl.to(mesh.position, {
//       x: -4,
//       ease: "none",
//     })
//       .to(
//         mesh.scale,
//         {
//           x: 0.9,
//           y: 0.9,
//           z: 0.9,
//           ease: "none",
//         },
//         "<",
//       )
//       .to(mesh.position, {
//         x: 2,
//         ease: "none",
//       })
//       .to(
//         mesh.scale,
//         {
//           x: 1.5,
//           y: 1.5,
//           z: 1.5,
//           ease: "none",
//         },
//         "<",
//       )
//       .to(mesh.position, {
//         x: 0,
//         ease: "none",
//       })
//       .to(
//         mesh.scale,
//         {
//           x: 1,
//           y: 1,
//           z: 1,
//           ease: "none",
//         },
//         "<",
//       );

//     return () => {
//       tl.kill();
//     };
//   }, [mesh]);

//   return (
//     <main
//       ref={containerRef}
//       className="gap-3 p-3 md:container md:mx-auto md:p-10"
//     >
//       <section className="fixed top-0 left-0 flex h-[100vh] flex-col items-center justify-center">
//         <motion.div
//           initial={{
//             opacity: 0,
//             filter: "blur(70px)",
//           }}
//           animate={{
//             opacity: 1,
//             filter: "blur(0px)",
//           }}
//           transition={{
//             duration: 5,
//             ease: "easeOut",
//           }}
//           className="md:h-[100vh] md:w-[100vw]"
//         >
//           <Canvas
//             gl={{
//               powerPreference: "high-performance",
//               preserveDrawingBuffer: false,
//               failIfMajorPerformanceCaveat: false,
//               antialias: true,
//             }}
//             shadows={false}
//           >
//             <directionalLight intensity={3} position={[0, 3, 2]} />
//             <PerspectiveCamera makeDefault fov={30} position={[0, 0, 6]} />
//             <Environment preset="city" />
//             <TextComponent />
//             <Cube setMeshRef={setMesh} />
//           </Canvas>
//         </motion.div>
//         {/*
//         <motion.div
//           initial={{
//             opacity: 0,
//             filter: "blur(20px)",
//           }}
//           animate={{
//             opacity: 1,
//             filter: "blur(0px)",
//           }}
//           transition={{
//             duration: 3,
//             ease: "easeOut",
//           }}
//           className="font-roboto mt-6 text-2xl"
//         >
//           <div className="flex flex-col gap-1 text-center">
//             <div className="">RSA magic, right under your thumbs!</div>
//             <div className="text-sm text-gray-300">Scroll to know more!</div>
//           </div>
//         </motion.div> */}
//       </section>
//       <div className="flex h-screen items-center justify-center">
//         <div className="font-title scale-150 md:text-9xl">CipherPet</div>
//       </div>

//       <section id="encryption-section" className="min-h-screen py-20">
//         <Encryption />
//       </section>

//       <section id="decryption-section" className="min-h-screen py-20">
//         <Decryption />
//       </section>
//     </main>
//   );
// }
