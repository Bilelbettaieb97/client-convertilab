"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface Stat {
  value: string; // ex: "72%", "3x", "+65%", "120"
  label: string;
}

function parseValue(v: string) {
  const m = v.match(/^([^\d]*)(\d+[.,]?\d*)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: v, decimals: 0 };
  const numStr = m[2].replace(",", ".");
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix: m[1], num: parseFloat(numStr), suffix: m[3], decimals };
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { prefix, num, suffix, decimals } = parseValue(value);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, num, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, num, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBand({
  stats,
  gradientClass = "from-purple-600 via-fuchsia-600 to-pink-600",
}: {
  stats: Stat[];
  gradientClass?: string;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {stats.map((s, i) => (
        <div
          key={i}
          className="relative text-center p-7 rounded-3xl bg-white/70 backdrop-blur border border-black/[0.05] lp-soft-shadow"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className={`text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
            <Counter value={s.value} />
          </div>
          <p className="mt-3 text-[15px] text-gray-500 leading-snug">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
