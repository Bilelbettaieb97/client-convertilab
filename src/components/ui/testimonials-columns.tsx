"use client";
import React from "react";
import { motion } from "framer-motion";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}

export const TestimonialsColumn = ({ className, testimonials, duration = 15 }: TestimonialsColumnProps) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 lg:p-10 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm shadow-xl shadow-purple-500/10 max-w-xs w-full hover:border-purple-400/40 transition-colors"
                  key={`${index}-${i}`}
                >
                  <div className="text-white/85 text-sm leading-relaxed">&ldquo;{text}&rdquo;</div>
                  <div className="flex items-center gap-3 mt-5">
                    <div
                      className="h-11 w-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500"
                      style={{ backgroundImage: image ? `url(${image})` : undefined, backgroundSize: "cover" }}
                    >
                      {!image && name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white">{name}</div>
                      <div className="text-xs leading-5 text-purple-300/70 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
