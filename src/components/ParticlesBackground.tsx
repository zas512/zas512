"use client";
import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random/dist/maath-random.esm";
import { Suspense, useRef, useState } from "react";
import type * as THREE from "three";

const StarBackground = (props: React.ComponentPropsWithoutRef<"group">) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    inSphere(new Float32Array(4000), { radius: 1.2 })
  );
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 12;
      ref.current.rotation.z += delta / 20;
    }
  });

  return (
    <group rotation={[Math.PI / 6, Math.PI / 6, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;
