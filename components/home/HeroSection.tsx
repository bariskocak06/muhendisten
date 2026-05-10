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
          İç sessizliğinde
          <span className="block mt-1 text-foreground/90 italic font-light">
            frekansın seni çağırıyor
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="mt-8 text-[15px] sm:text-lg text-muted-foreground max-w-md mx-auto leading-[1.75] font-light"
        >
          Çakrana uyumlu yağlarla tanış: doğal taş, niyet cümlesi ve yumuşak bir
          ritüel akışı. Acele yok — sadece sana ait bir an.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
        >
          <Link
            href="/cakra-testi"
            className="inline-flex items-center justify-center px-9 py-4 bg-foreground text-[#fdfbf7] text-[12px] sm:text-[13px] tracking-[0.22em] uppercase hover:bg-foreground/88 transition-all duration-300 cursor-pointer shadow-[0_8px_32px_-8px_rgba(42,38,34,0.35)]"
          >
            Çakra testine başla
          </Link>
          <Link
            href="/urunler"
            className="inline-flex items-center justify-center px-9 py-4 border border-foreground/18 bg-card/40 backdrop-blur-sm text-foreground text-[12px] sm:text-[13px] tracking-[0.22em] uppercase hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
          >
            Yağları keşfet
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 text-[12px] text-muted-foreground/90 tracking-wide"
        >
          Ücretsiz test · Elle harmanlanmış · Her şişede doğal taş
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
