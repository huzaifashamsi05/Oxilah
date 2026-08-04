"use client";

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, Line } from '@react-three/drei';
import * as THREE from 'three';

const nodes = [
  [0, 0, 0],
  [2, 1, -1],
  [-1.5, 1.5, 1],
  [1.5, -1.5, 1.5],
  [-2, -1, -1],
  [0.5, 2.5, 0],
];

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 2], [1, 5], [2, 4], [3, 4]
];

function ERP3DObject({ isMobile }: { isMobile?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const lines = useMemo(() => {
    return connections.map(conn => {
      const p1 = nodes[conn[0]];
      const p2 = nodes[conn[1]];
      return [new THREE.Vector3(...p1), new THREE.Vector3(...p2)];
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      
      if (!isMobile) {
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (mouse.y * 0.1), 0.05);
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, (mouse.x * 0.1), 0.05);
      }
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#2E7FFF" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00D4FF" />
      
      {!isMobile && (
        <Sparkles 
          count={100} 
          scale={10} 
          size={1.5} 
          speed={0.4} 
          opacity={0.3} 
          color="#00D4FF"
        />
      )}

      <group ref={groupRef}>
        {nodes.map((pos, idx) => (
          <Float 
            key={idx} 
            speed={1 + (idx * 0.2)} 
            rotationIntensity={0.5} 
            floatIntensity={1 + (idx * 0.5)} 
            position={[pos[0], pos[1], pos[2]]}
          >
            <mesh>
              <sphereGeometry args={[0.15, 32, 32]} />
              <meshStandardMaterial 
                color="#00D4FF" 
                emissive="#00D4FF" 
                emissiveIntensity={1.5} 
                toneMapped={false} 
              />
            </mesh>
          </Float>
        ))}

        {lines.map((points, idx) => (
          <Line 
            key={`line-${idx}`} 
            points={points} 
            color="#2E7FFF" 
            lineWidth={isMobile ? 1 : 1.5} 
            opacity={0.3} 
            transparent 
          />
        ))}
      </group>
    </>
  );
}

export default function ERP3DScene({ isMobile }: { isMobile?: boolean }) {
  return (
    <Suspense fallback={
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-accent-secondary border-t-transparent animate-spin" />
      </div>
    }>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ERP3DObject isMobile={isMobile} />
      </Canvas>
    </Suspense>
  );
}
