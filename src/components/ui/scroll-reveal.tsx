"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function ScrollReveal({ children }: Readonly<{ children: ReactNode }>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}
