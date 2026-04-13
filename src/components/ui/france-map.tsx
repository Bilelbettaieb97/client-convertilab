"use client";

import { useState } from "react";

interface City {
  id: string;
  name: string;
  x: number;
  y: number;
  highlight?: boolean;
}

const cities: City[] = [
  { id: "paris", name: "Paris", x: 214, y: 124, highlight: true },
  { id: "lille", name: "Lille", x: 232, y: 60 },
  { id: "rennes", name: "Rennes", x: 115, y: 151 },
  { id: "nantes", name: "Nantes", x: 118, y: 183 },
  { id: "bordeaux", name: "Bordeaux", x: 142, y: 269 },
  { id: "toulouse", name: "Toulouse", x: 192, y: 314 },
  { id: "montpellier", name: "Montpellier", x: 253, y: 313 },
  { id: "marseille", name: "Marseille", x: 290, y: 324 },
  { id: "nice", name: "Nice", x: 336, y: 310 },
  { id: "grenoble", name: "Grenoble", x: 298, y: 256 },
  { id: "lyon", name: "Lyon", x: 277, y: 236 },
  { id: "strasbourg", name: "Strasbourg", x: 349, y: 134 },
];

const franceOutline =
  "M 216,47 L 201,49 L 159,101 L 117,97 L 45,141 L 45,159 L 72,166 L 94,191 L 127,220 L 127,278 L 119,317 L 112,321 L 156,346 L 231,357 L 281,324 L 303,332 L 338,310 L 323,267 L 328,234 L 308,220 L 338,166 L 349,133 L 360,119 L 323,112 L 300,101 L 268,90 L 256,72 L 233,61 Z";

export function FranceMap({ className = "" }: { className?: string }) {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-auto drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="franceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="franceStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <radialGradient id="dotGlow">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* France outline */}
        <path
          d={franceOutline}
          fill="url(#franceGradient)"
          stroke="url(#franceStroke)"
          strokeWidth="2"
          strokeLinejoin="round"
          className="animate-fade-in"
        />

        {/* Connection lines from Paris */}
        {cities
          .filter((c) => c.id !== "paris")
          .map((city, i) => (
            <line
              key={`line-${city.id}`}
              x1={214}
              y1={124}
              x2={city.x}
              y2={city.y}
              stroke="url(#franceStroke)"
              strokeWidth="0.5"
              strokeOpacity="0.25"
              strokeDasharray="2 3"
              style={{
                animation: `fadeInLine 1s ease-out ${i * 0.08}s both`,
              }}
            />
          ))}

        {/* City dots */}
        {cities.map((city, i) => {
          const isHovered = hoveredCity === city.id;
          const isHighlight = city.highlight;
          return (
            <g
              key={city.id}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
              style={{
                cursor: "pointer",
                animation: `popIn 0.5s ease-out ${0.5 + i * 0.08}s both`,
              }}
            >
              {/* Outer pulse ring */}
              <circle
                cx={city.x}
                cy={city.y}
                r={isHighlight ? 12 : 8}
                fill="url(#dotGlow)"
                style={{
                  animation: `pulse 2s ease-in-out ${i * 0.3}s infinite`,
                }}
              />
              {/* Solid dot */}
              <circle
                cx={city.x}
                cy={city.y}
                r={isHovered ? (isHighlight ? 6 : 5) : isHighlight ? 5 : 3.5}
                fill={isHighlight ? "#ec4899" : "#a855f7"}
                stroke="#fff"
                strokeWidth="1.5"
                filter="url(#glow)"
                style={{ transition: "r 0.2s ease" }}
              />
              {/* Label */}
              <text
                x={city.x}
                y={city.y - (isHighlight ? 12 : 9)}
                textAnchor="middle"
                fontSize={isHighlight ? "11" : "9"}
                fontWeight={isHighlight ? "700" : "600"}
                fill="#1f2937"
                style={{
                  opacity: isHovered || isHighlight ? 1 : 0.65,
                  transition: "opacity 0.2s ease",
                  paintOrder: "stroke",
                  stroke: "#fff",
                  strokeWidth: 3,
                }}
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Stats overlay */}
      <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-purple-100">
        <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-none">
          150+
        </div>
        <div className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mt-1">
          Clients en France
        </div>
      </div>

      <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-purple-100 flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        <div>
          <div className="text-[11px] font-bold text-gray-900">12 villes desservies</div>
          <div className="text-[9px] text-gray-500">Paris & toute la France</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0);
            transform-origin: center;
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
            transform-origin: center;
          }
          50% {
            opacity: 0.2;
            transform: scale(1.8);
          }
        }
        @keyframes fadeInLine {
          from {
            opacity: 0;
            stroke-dashoffset: 100;
          }
          to {
            opacity: 1;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
