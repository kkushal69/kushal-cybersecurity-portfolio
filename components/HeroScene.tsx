"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, Stars, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.x += delta * 0.08;
    group.current.rotation.y += delta * 0.22;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.42) * 0.07;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.72) * 0.11;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.2, 3]} />
        <meshStandardMaterial
          color="#7cf6ff"
          emissive="#057cff"
          emissiveIntensity={1.9}
          wireframe
          transparent
          opacity={0.72}
        />
      </mesh>

      <mesh scale={0.58}>
        <icosahedronGeometry args={[1.2, 3]} />
        <meshPhysicalMaterial
          color="#050b16"
          metalness={1}
          roughness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.06}
          emissive="#031d48"
          emissiveIntensity={1.1}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.57, 32, 32]} />
        <meshBasicMaterial color="#0c78ff" transparent opacity={0.11} />
      </mesh>

      {[1.48, 1.77, 2.03].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / (2 + i * 1.4), i * 0.8, i * 0.4]}>
          <torusGeometry args={[radius, i === 0 ? 0.022 : 0.011, 14, 180]} />
          <meshBasicMaterial
            color={i === 1 ? "#8b70ff" : "#72f6ff"}
            transparent
            opacity={i === 2 ? 0.34 : 0.78}
          />
        </mesh>
      ))}

      <Text position={[0, 0, 1.06]} fontSize={0.25} color="#eafcff" anchorX="center" anchorY="middle">
        VAPT
      </Text>
      <Text position={[0, -0.32, 1.01]} fontSize={0.075} color="#79a5c0" anchorX="center" anchorY="middle">
        SECURITY CORE
      </Text>
    </group>
  );
}

function DataNode({ position, label, color }: { position: [number, number, number]; label: string; color: string }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.055, 18, 18]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.1, 0.006, 8, 40]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      <Text position={[0.14, 0.02, 0]} fontSize={0.085} color="#8da7bb" anchorX="left" anchorY="middle">
        {label}
      </Text>
    </group>
  );
}

function Connection({ from, to }: { from: [number, number, number]; to: [number, number, number] }) {
  const points = [new THREE.Vector3(...from), new THREE.Vector3(...to)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: "#397fa4", transparent: true, opacity: 0.22 });
  return <primitive object={new THREE.Line(geometry, material)} />;
}

export default function HeroScene() {
  const nodes: Array<{ position: [number, number, number]; label: string; color: string }> = [
    { position: [-2.0, 1.35, 0.2], label: "HTTP", color: "#72f6ff" },
    { position: [1.95, 1.15, -0.2], label: "API", color: "#8b76ff" },
    { position: [2.05, -1.45, 0.15], label: "NMAP", color: "#72f6ff" },
    { position: [-1.85, -1.35, -0.25], label: "LINUX", color: "#8b76ff" }
  ];

  return (
    <div className="scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6.1], fov: 42 }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 3, 4]} intensity={19} color="#46e9ff" />
        <pointLight position={[-4, -2, 2]} intensity={11} color="#765bff" />
        <pointLight position={[0, 4, -1]} intensity={5} color="#4b9cff" />

        <Stars radius={70} depth={45} count={1700} factor={2.2} saturation={0} fade speed={0.3} />
        <Sparkles count={170} scale={8} size={1.5} speed={0.22} color="#8beaff" />

        <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.44}>
          <Core />
        </Float>

        {nodes.map((node) => <DataNode key={node.label} {...node} />)}
        <Connection from={nodes[0].position} to={nodes[1].position} />
        <Connection from={nodes[1].position} to={nodes[2].position} />
        <Connection from={nodes[2].position} to={nodes[3].position} />
        <Connection from={nodes[3].position} to={nodes[0].position} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.38}
          minPolarAngle={Math.PI * 0.37}
          maxPolarAngle={Math.PI * 0.63}
        />
      </Canvas>
    </div>
  );
}
