"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, Environment, Html } from "@react-three/drei";
import { useMemo, useState } from "react";
import * as THREE from "three";

// France contour in viewBox 400×400 pixel space (from france-map.tsx)
const contourPx: [number, number][] = [
  [216, 47], [201, 49], [159, 101], [117, 97], [45, 141], [45, 159],
  [72, 166], [94, 191], [127, 220], [127, 278], [119, 317], [112, 321],
  [156, 346], [231, 357], [281, 324], [303, 332], [338, 310], [323, 267],
  [328, 234], [308, 220], [338, 166], [349, 133], [360, 119], [323, 112],
  [300, 101], [268, 90], [256, 72], [233, 61],
];

const cities = [
  { id: "paris", name: "Paris", px: [214, 124] as [number, number], highlight: true },
  { id: "lille", name: "Lille", px: [232, 60] as [number, number] },
  { id: "rennes", name: "Rennes", px: [115, 151] as [number, number] },
  { id: "nantes", name: "Nantes", px: [118, 183] as [number, number] },
  { id: "bordeaux", name: "Bordeaux", px: [142, 269] as [number, number] },
  { id: "toulouse", name: "Toulouse", px: [192, 314] as [number, number] },
  { id: "montpellier", name: "Montpellier", px: [253, 313] as [number, number] },
  { id: "marseille", name: "Marseille", px: [290, 324] as [number, number] },
  { id: "nice", name: "Nice", px: [336, 310] as [number, number] },
  { id: "grenoble", name: "Grenoble", px: [298, 256] as [number, number] },
  { id: "lyon", name: "Lyon", px: [277, 236] as [number, number] },
  { id: "strasbourg", name: "Strasbourg", px: [349, 134] as [number, number] },
];

// Convert pixel coords (400×400, y-down) → world coords centered at origin (y-up)
const SCALE = 80;
function toWorld([x, y]: [number, number]): [number, number] {
  return [(x - 200) / SCALE, -(y - 200) / SCALE];
}

function FranceMesh() {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    contourPx.forEach((pt, i) => {
      const [x, y] = toWorld(pt);
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    });
    shape.closePath();

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.35,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.04,
      bevelSegments: 4,
      curveSegments: 12,
    });
  }, []);

  return (
    <mesh geometry={geometry} castShadow receiveShadow rotation={[-Math.PI / 2.3, 0, 0]}>
      <meshStandardMaterial
        color="#a855f7"
        metalness={0.5}
        roughness={0.25}
        emissive="#7c3aed"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function CityMarker({
  position,
  name,
  highlight,
}: {
  position: [number, number, number];
  name: string;
  highlight?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const radius = highlight ? 0.09 : 0.055;

  return (
    <Float speed={2.5} rotationIntensity={0} floatIntensity={0.4}>
      <group position={position}>
        <mesh
          onPointerEnter={(e) => {
            e.stopPropagation();
            setHover(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            setHover(false);
            document.body.style.cursor = "auto";
          }}
        >
          <sphereGeometry args={[radius, 24, 24]} />
          <meshStandardMaterial
            color={highlight ? "#ec4899" : "#f0abfc"}
            emissive={highlight ? "#ec4899" : "#a855f7"}
            emissiveIntensity={hover ? 1.5 : 0.8}
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>
        {/* Glow halo */}
        <mesh>
          <sphereGeometry args={[radius * 1.8, 16, 16]} />
          <meshBasicMaterial
            color={highlight ? "#ec4899" : "#a855f7"}
            transparent
            opacity={0.15}
          />
        </mesh>
        {(hover || highlight) && (
          <Html position={[0, radius + 0.15, 0]} center distanceFactor={6} zIndexRange={[10, 0]}>
            <div className="px-2.5 py-1 rounded-lg bg-white text-[11px] font-bold text-gray-900 shadow-xl whitespace-nowrap pointer-events-none border border-purple-100">
              {name}
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

export function France3D({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        shadows
        camera={{ position: [0, 1.8, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 6, 4]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-3, 2, 3]} color="#ec4899" intensity={1} />
        <pointLight position={[3, 1, -2]} color="#a855f7" intensity={0.6} />
        <Environment preset="city" />

        <FranceMesh />

        {cities.map((c) => {
          const [wx, wy] = toWorld(c.px);
          return (
            <CityMarker
              key={c.id}
              name={c.name}
              highlight={c.highlight}
              position={[wx, 0.55, -wy]}
            />
          );
        })}

        <ContactShadows position={[0, -0.5, 0]} opacity={0.5} blur={2.5} far={2} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>

      {/* Stats overlays */}
      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-purple-100 pointer-events-none">
        <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-none">
          150+
        </div>
        <div className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mt-1">
          Clients en France
        </div>
      </div>

      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-purple-100 flex items-center gap-2 pointer-events-none">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        <div>
          <div className="text-[11px] font-bold text-gray-900">12 villes desservies</div>
          <div className="text-[9px] text-gray-500">Drag pour explorer</div>
        </div>
      </div>
    </div>
  );
}
