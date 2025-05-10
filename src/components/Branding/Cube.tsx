/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type CubeProps = {
  setMeshRef?: (ref: THREE.Object3D | null) => void;
};

export function Cube({ setMeshRef }: CubeProps) {
  const mesh = useRef<THREE.Mesh | null>(null);

  const { nodes }: any = useGLTF("/cube.glb");
  const { viewport }: any = useThree();

  useEffect(() => {
    if (setMeshRef && mesh.current) {
      setMeshRef(mesh.current);
    }
  }, [setMeshRef]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;
    }
  });

  // @ts-ignore: Ignore any errors that come from accessing geometry and material on the nodes object
  const geometry = nodes.Cube.geometry;
  const material = nodes.Cube.material;

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      geometry={geometry}
      scale={viewport.width / 10}
    >
      <MeshTransmissionMaterial
        thickness={0.6}
        roughness={0.1}
        transmission={1}
        ior={1.3}
        chromaticAberration={0.05}
        distortion={0.9}
        distortionScale={0.5}
        temporalDistortion={0.1}
        backside
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}
