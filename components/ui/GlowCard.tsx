"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  chakraColor?: string;
  className?: string;
}

export function GlowCard({
  children,
  chakraColor = "#C9A84C",
  className = "",
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={{
        boxShadow: `0 0 30px ${chakraColor}25`,
        borderColor: `${chakraColor}80`,
      }}
      transition={{ duration: 0.3 }}
      className={`relative bg-bg-secondary border border-accent-gold-soft p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
