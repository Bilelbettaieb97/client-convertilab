"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

const projects = [
  {
    name: "Papapret",
    category: "Courtage",
    image: "/images/portfolio/portfolio-papapret-hero.webp",
    metric: "+340%",
    metricLabel: "leads/mois",
    span: "col-span-2 row-span-2",
    href: "/portfolio",
  },
  {
    name: "Arancini",
    category: "Restaurant",
    image: "/images/portfolio/portfolio-arancini-hero.webp",
    metric: "+180%",
    metricLabel: "réservations",
    span: "col-span-1 row-span-1",
    href: "/portfolio",
  },
  {
    name: "Funestore",
    category: "E-commerce",
    image: "/images/portfolio/portfolio-funestore-hero.webp",
    metric: "+220%",
    metricLabel: "ventes",
    span: "col-span-1 row-span-1",
    href: "/portfolio",
  },
  {
    name: "ACB",
    category: "Industrie",
    image: "/images/portfolio/portfolio-acb-hero.webp",
    metric: "+95%",
    metricLabel: "trafic SEO",
    span: "col-span-2 row-span-1",
    href: "/portfolio",
  },
];

export function HeroShowcase({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-3 grid-rows-3 gap-3 aspect-[4/4.2]">
        {projects.map((p, i) => (
          <Link
            key={p.name}
            href={p.href}
            className={`group relative ${p.span} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
            style={{
              animation: `slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.1}s both`,
            }}
          >
            <Image
              src={p.image}
              alt={`${p.name} — Site créé par ConvertiLab`}
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority={i === 0}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Top badge — metric */}
            <div className="absolute top-3 left-3">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-lg">
                <span className="text-xs font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {p.metric}
                </span>
                <span className="text-[9px] font-semibold text-gray-600 uppercase tracking-wide">
                  {p.metricLabel}
                </span>
              </div>
            </div>

            {/* Arrow icon top-right */}
            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-900" />
            </div>

            {/* Bottom — name + category */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="text-white font-bold text-sm leading-tight">{p.name}</div>
              <div className="text-white/70 text-[10px] uppercase tracking-wider font-semibold mt-0.5">
                {p.category}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Floating trust card */}
      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-purple-100 animate-float-slow z-10">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white" />
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-white" />
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white" />
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-[10px] font-bold text-gray-900 mt-0.5">
              4.9/5 • 47 avis vérifiés
            </div>
          </div>
        </div>
      </div>

      {/* Floating "live" badge */}
      <div
        className="absolute -top-3 -left-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5 z-10"
        style={{ animation: "floatSlow 4s ease-in-out infinite" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider">3 sites en cours</span>
      </div>

      <style jsx>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
