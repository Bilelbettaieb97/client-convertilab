"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote?: string;
  avatarSrc: string;
  rating: number;
}

export interface ClientsSectionProps {
  tagLabel: string;
  title: string;
  description: string;
  stats: Stat[];
  testimonials: Testimonial[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
  className?: string;
}

const StatCard = ({ value, label }: Stat) => (
  <Card className="bg-white/5 border-white/10 text-center rounded-2xl backdrop-blur-sm">
    <CardContent className="p-4">
      <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        {value}
      </p>
      <p className="text-xs text-white/60 mt-1 font-semibold">{label}</p>
    </CardContent>
  </Card>
);

const StickyTestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <motion.div className="sticky w-full" style={{ top: `${20 + index * 24}px` }}>
      <div
        className={cn(
          "p-6 rounded-3xl shadow-2xl flex flex-col h-auto w-full",
          "bg-gradient-to-br from-gray-900 via-purple-950/40 to-gray-900",
          "border border-purple-500/20 backdrop-blur-xl"
        )}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-2xl bg-cover bg-center flex-shrink-0 ring-2 ring-purple-500/30"
            style={{ backgroundImage: `url(${testimonial.avatarSrc})` }}
            aria-label={`Photo de ${testimonial.name}`}
          />
          <div className="flex-grow">
            <p className="font-bold text-lg text-white">{testimonial.name}</p>
            <p className="text-sm text-white/60">{testimonial.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 my-4">
          <span className="font-bold text-base text-white">{testimonial.rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(testimonial.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-white/20"
                )}
              />
            ))}
          </div>
        </div>

        {testimonial.quote && (
          <p className="text-base text-white/70 leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        )}
      </div>
    </motion.div>
  );
};

export const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  primaryActionLabel,
  secondaryActionLabel,
  className,
}: ClientsSectionProps) => {
  const scrollContainerHeight = `calc(100vh + ${testimonials.length * 100}px)`;

  return (
    <section className={cn("relative w-full bg-black text-white py-20 md:py-28 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
        {/* Left Column: Sticky Content */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-20">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-purple-300 font-semibold uppercase text-xs tracking-wider">
              {tagLabel}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            {title}
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">{description}</p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              {secondaryActionLabel}
            </Button>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/70 hover:scale-105 transition-all"
            >
              {primaryActionLabel}
            </Button>
          </div>
        </div>

        {/* Right Column: Sticky stack */}
        <div className="relative flex flex-col gap-4" style={{ height: scrollContainerHeight }}>
          {testimonials.map((testimonial, index) => (
            <StickyTestimonialCard key={testimonial.name} index={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
