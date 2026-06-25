"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Star, Zap, TrendingUp } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Clients accompagnés",
    sublabel: "artisans, coaches, commerçants",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Note Trustpilot",
    sublabel: "15 avis vérifiés ★★★★★",
    gradient: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    decimals: 1,
  },
  {
    icon: Zap,
    value: 7,
    suffix: "j",
    label: "Délai de livraison",
    sublabel: "de la commande au site live",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: TrendingUp,
    value: 280,
    suffix: "%",
    prefix: "+",
    label: "CA moyen généré",
    sublabel: "après 6 mois d'accompagnement",
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
];

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 bg-gray-950 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-semibold text-white/40 uppercase tracking-widest mb-10"
        >
          ConvertiLab en chiffres
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Value */}
                <div className="text-3xl sm:text-4xl font-black text-white mb-1 tabular-nums">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={1800}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
                  />
                </div>

                {/* Label */}
                <p className="text-sm font-semibold text-white/80 mb-1">{stat.label}</p>
                <p className="text-xs text-white/40 leading-tight">{stat.sublabel}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
