"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Hero3DObject() {
  const groupRef = useRef<THREE.Group>(null);
  const autoRotateY = useRef(0);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Very slow continuous auto-rotation
      autoRotateY.current += delta * 0.15;
      
      // Mouse-follow parallax
      const targetX = state.pointer.y * 0.3;
      const targetY = autoRotateY.current + (state.pointer.x * 0.3);
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inner solid mesh */}
      <mesh>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color="#2E7FFF" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Outer wireframe mesh */}
      <mesh scale={1.15}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <Suspense fallback={
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-4 h-4 rounded-full bg-accent-secondary animate-pulse shadow-[0_0_15px_rgba(0,212,255,0.8)]" />
      </div>
    }>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00D4FF" intensity={1.5} />
        <Hero3DObject />
        <Sparkles count={80} scale={8} size={1.5} speed={0.4} opacity={0.4} color="#00D4FF" />
      </Canvas>
    </Suspense>
  );
}
