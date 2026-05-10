"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ParticleCanvas } from "@/components/ui/particle-canvas-2";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { HERO_PARTICLE_COLORS } from "@/components/home/hero-particles";
import { pickHeroGradientBlurColor } from "@/components/home/hero-gradient-blur";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setIsMobile(mq.matches);
      setPrefersReducedMotion(motionMq.matches);
    };
    sync();
    mq.addEventListener("change", sync);
    motionMq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      motionMq.removeEventListener("change", sync);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden pb-[env(safe-area-inset-bottom,0px)]">
      {!prefersReducedMotion && (
        <>
          <GradientBlur
            colorGenerator={pickHeroGradientBlurColor}
            radius={isMobile ? 12 : 14}
            opacityDecay={isMobile ? 0.05 : 0.042}
            className="pointer-events-none absolute inset-0 z-0 min-h-[100dvh] h-full w-full"
          />
          <ParticleCanvas
            className="absolute inset-0 pointer-events-none z-[1] min-h-[100dvh] h-full w-full"
            background="transparent"
            maxParticles={isMobile ? 52 : 120}
            initialParticles={isMobile ? 14 : 28}
            particlesPerFrame={isMobile ? 1 : 2}
            colors={[...HERO_PARTICLE_COLORS]}
            sizeRange={isMobile ? [2, 8] : [2, 9]}
            velocityRange={[0.2, 0.65]}
            downward={false}
            opacity={isMobile ? 0.88 : 0.95}
            blendMode="source-over"
          />
        </>
      )}
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-background/72 via-[#f4eef8]/58 to-[#eef8f4]/62"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-[11px] uppercase tracking-[0.35em] text-spirit/85 sm:text-xs"
        >
          Niyet · Ritüel · Enerji
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.12 }}
          className="font-heading text-[clamp(1.85rem,8.2vw,3.75rem)] font-light leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
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
          className="mx-auto mt-8 max-w-md text-[15px] font-light leading-relaxed text-muted-foreground sm:text-lg"
        >
          Size özel hazırlandı.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42 }}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href="/cakra-testi"
            className="group relative inline-flex min-h-[48px] transform-gpu cursor-pointer touch-manipulation items-center justify-center rounded-full transition-transform duration-300 ease-out active:scale-[0.98] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spirit/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-0"
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
            <span className="relative inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/70 bg-gradient-to-br from-white/65 via-white/45 to-violet-100/35 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_0_36px_-6px_rgba(236,72,153,0.35),0_0_36px_-6px_rgba(56,189,248,0.32)] backdrop-blur-md transition-all duration-300 sm:min-h-0 sm:w-auto sm:px-9 sm:py-4 sm:text-[12px] sm:tracking-[0.22em] md:text-[13px] group-hover:border-white/90 group-hover:from-white/75 group-hover:via-fuchsia-50/50 group-hover:to-cyan-50/40 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_48px_-4px_rgba(236,72,153,0.45),0_0_48px_-4px_rgba(34,211,238,0.42)]">
              Çakra testine başla
            </span>
          </Link>
          <Link
            href="/urunler"
            className="group relative inline-flex min-h-[48px] transform-gpu cursor-pointer touch-manipulation items-center justify-center rounded-full transition-transform duration-300 ease-out active:scale-[0.98] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-0"
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
            <span className="relative inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-amber-100/75 bg-gradient-to-br from-[#fdfbf7]/92 via-amber-50/55 to-emerald-50/40 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_0_32px_-8px_rgba(143,115,88,0.32),0_0_28px_-6px_rgba(52,211,153,0.22)] backdrop-blur-md transition-all duration-300 sm:min-h-0 sm:w-auto sm:px-9 sm:py-4 sm:text-[12px] sm:tracking-[0.22em] md:text-[13px] group-hover:border-amber-100 group-hover:from-white/95 group-hover:via-amber-50/65 group-hover:to-emerald-50/50 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_44px_-6px_rgba(143,115,88,0.42),0_0_40px_-6px_rgba(52,211,153,0.32)]">
              Yağları keşfet
            </span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 text-[11px] tracking-wide text-muted-foreground/90 sm:text-[12px]"
        >
          Çakrana uyumlu yağlar, doğal taşlar ve numeroloji analizi.
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[max(1.25rem,env(safe-area-inset-bottom,0px)+0.5rem)] left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown
          className="h-5 w-5 text-spirit/35"
          strokeWidth={1}
          aria-hidden
        />
      </motion.div>
    </section>
  );
}
