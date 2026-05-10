"use client";

import { motion } from "framer-motion";
import { AURORA_MEANINGS } from "@/lib/numerology/auroraText";

interface NumberCardProps {
  title: string;
  value: number;
  description?: string;
  isMaster?: boolean;
  delay?: number;
}

export function NumberCard({
  title,
  value,
  description,
  isMaster,
  delay = 0,
}: NumberCardProps) {
  const meaning = AURORA_MEANINGS[value] || {
    keywords: [],
    archetype: "Bilinmeyen",
    element: "Nötr",
    chakra: "Yok",
    light: [],
    shadow: [],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className={`group relative overflow-hidden p-5 transition-all duration-300 sm:p-8 ${
        isMaster
          ? "bg-white border border-foreground/20"
          : "bg-white border border-border hover:border-foreground/20"
      }`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-xs text-muted-foreground uppercase tracking-wider">
            {title}
          </h3>
          {isMaster && (
            <span className="text-[10px] px-2 py-1 border border-foreground/30 text-foreground tracking-widest">
              ÜSTAD
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span
            className={`text-5xl font-heading font-light ${
              isMaster ? "text-foreground" : "text-foreground"
            }`}
          >
            {value}
          </span>
          <div className="h-px flex-grow bg-border" />
        </div>

        <div className="space-y-3 flex-grow">
          <div>
            <p className="font-heading text-lg text-foreground/80">
              {meaning.archetype}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-x-1.5 text-xs text-muted-foreground">
              <span>{meaning.chakra}</span>
              <span className="text-foreground/30" aria-hidden>
                ·
              </span>
              <span>{meaning.element}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {meaning.keywords.slice(0, 3).map((k) => (
              <span
                key={k}
                className="text-[10px] uppercase tracking-wider px-3 py-1 border border-border text-muted-foreground"
              >
                {k}
              </span>
            ))}
          </div>

          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed pt-4 border-t border-border">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
