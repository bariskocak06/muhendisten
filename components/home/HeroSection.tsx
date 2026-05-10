"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ParticleCanvas } from "@/components/ui/particle-canvas-2";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { HERO_PARTICLE_COLORS } from "@/components/home/hero-particles";
import { pickHeroGradientBlurColor } from "@/components/home/hero-gradient-blur";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <GradientBlur
        colorGenerator={pickHeroGradientBlurColor}
        radius={88}
        opacityDecay={0.013}
        className="pointer-events-none absolute inset-0 z-0 min-h-[100dvh] h-full w-full"
      />
      <ParticleCanvas
        className="absolute inset-0 pointer-events-none z-[1] min-h-[100dvh] h-full w-full"
        background="transparent"
        maxParticles={120}
        initialParticles={28}
        particlesPerFrame={2}
        colors={[...HERO_PARTICLE_COLORS]}
        sizeRange={[10, 58]}
        velocityRange={[0.2, 0.65]}
        downward={false}
        opacity={0.95}
        blendMode="source-over"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/72 via-[#f4eef8]/58 to-[#eef8f4]/62 pointer-events-none z-[2]"
        aria-hidden
      />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-spirit/85 mb-5"
        >
          Niyet · Ritüel · Enerji
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.12 }}
          className="font-heading text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.08] tracking-tight"
        >
          <span className="font-heading not-italic text-foreground/90">
            Frekansın
          </span>{" "}
          <span className="italic text-foreground/90">seni çağırıyor</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="mt-8 text-[15px] sm:text-lg text-muted-foreground max-w-md mx-auto leading-[1.75] font-light"
        >
          Size özel hazırlandı.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
        >
          <Link
            href="/cakra-testi"
            className="group relative inline-flex transform-gpu cursor-pointer items-center justify-center rounded-full transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spirit/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(ellipse_at_35%_25%,rgba(244,114,182,0.75)_0%,rgba(192,132,252,0.65)_22%,rgba(99,102,241,0.55)_48%,rgba(34,211,238,0.5)_72%,rgba(52,211,153,0.45)_88%,transparent_100%)] opacity-95 blur-3xl transition-all duration-500 group-hover:-inset-7 group-hover:opacity-100"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-full bg-[radial-gradient(circle_at_78%_65%,rgba(251,191,36,0.55)_0%,rgba(253,186,116,0.35)_35%,transparent_60%)] opacity-90 blur-2xl"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-400/70 via-violet-500/65 to-cyan-400/70 opacity-95 blur-md transition-all duration-300 group-hover:from-fuchsia-400/85 group-hover:via-violet-500/80 group-hover:to-cyan-400/85"
            />
            <span className="relative inline-flex items-center justify-center rounded-full border border-white/70 bg-gradient-to-br from-white/65 via-white/45 to-violet-100/35 px-9 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_0_36px_-6px_rgba(236,72,153,0.35),0_0_36px_-6px_rgba(56,189,248,0.32)] backdrop-blur-md transition-all duration-300 sm:text-[13px] group-hover:border-white/90 group-hover:from-white/75 group-hover:via-fuchsia-50/50 group-hover:to-cyan-50/40 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_48px_-4px_rgba(236,72,153,0.45),0_0_48px_-4px_rgba(34,211,238,0.42)]">
              Çakra testine başla
            </span>
          </Link>
          <Link
            href="/urunler"
            className="group relative inline-flex transform-gpu cursor-pointer items-center justify-center rounded-full transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-5 rounded-full bg-[radial-gradient(ellipse_at_45%_28%,rgba(251,191,36,0.62)_0%,rgba(217,180,130,0.55)_24%,rgba(143,115,88,0.48)_52%,rgba(74,124,89,0.38)_78%,transparent_100%)] opacity-92 blur-3xl transition-all duration-500 group-hover:-inset-6 group-hover:opacity-100"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_88%_72%,rgba(180,83,9,0.35)_0%,rgba(253,186,116,0.3)_40%,transparent_58%)] opacity-88 blur-xl"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-amber-300/65 via-[#8f7358]/55 to-emerald-400/60 opacity-92 blur-md transition-all duration-300 group-hover:from-amber-300/80 group-hover:via-[#a68462]/65 group-hover:to-emerald-400/72"
            />
            <span className="relative inline-flex items-center justify-center rounded-full border border-amber-100/75 bg-gradient-to-br from-[#fdfbf7]/92 via-amber-50/55 to-emerald-50/40 px-9 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_0_32px_-8px_rgba(143,115,88,0.32),0_0_28px_-6px_rgba(52,211,153,0.22)] backdrop-blur-md transition-all duration-300 sm:text-[13px] group-hover:border-amber-100 group-hover:from-white/95 group-hover:via-amber-50/65 group-hover:to-emerald-50/50 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_44px_-6px_rgba(143,115,88,0.42),0_0_40px_-6px_rgba(52,211,153,0.32)]">
              Yağları keşfet
            </span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 text-[12px] text-muted-foreground/90 tracking-wide"
        >
          Çakrana uyumlu yağlar, doğal taşlar ve numeroloji analizi.
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown
          className="w-5 h-5 text-spirit/35"
          strokeWidth={1}
          aria-hidden
        />
      </motion.div>
    </section>
  );
}
