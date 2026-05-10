"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Droplets, Sparkles } from "lucide-react";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { pickHeroGradientBlurColor } from "@/components/home/hero-gradient-blur";

const steps = [
  {
    icon: Compass,
    title: "Keşfet",
    text: "Ücretsiz çakra testi veya nümeroloji ile hangi niyetin sana seslendiğini duy.",
    href: "/cakra-testi",
    cta: "Teste git",
  },
  {
    icon: Droplets,
    title: "Seç",
    text: "Sana eşlik edecek yağı ve taşı seç; ritüel kartınla birlikte kapına gelsin.",
    href: "/urunler",
    cta: "Koleksiyon",
  },
  {
    icon: Sparkles,
    title: "Yaşa",
    text: "Nefes ve niyetle sür; küçük bir alan yarat — her damla bir hatırlatıcı.",
    href: "/urunler/7li-cakra-seti",
    cta: "Seti incele",
  },
];

export function RitualJourney() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 py-20 sm:py-28">
      <GradientBlur
        colorGenerator={pickHeroGradientBlurColor}
        radius={88}
        opacityDecay={0.013}
        className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-background/78 via-[#f7f2ee]/55 to-muted/45"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-spirit/80">
            Ritüel yolculuğun
          </p>
          <h2 className="font-heading text-4xl font-light leading-[1.12] text-foreground sm:text-5xl md:text-6xl lg:text-[3.35rem]">
            Üç nefeste{" "}
            <span className="italic text-foreground/85">niyetine yaklaş</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            Karmaşık değil: önce farkındalık, sonra seçim, sonra ritüel. Sen
            hazır olduğunda yağın da hazır.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card-spirit relative flex flex-col items-center rounded-2xl p-8 text-center md:items-start md:text-left"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-spirit/10 text-spirit">
                  <Icon className="h-5 w-5" strokeWidth={1.25} />
                </div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 font-heading text-xl text-foreground">
                  {step.title}
                </h3>
                <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
                <Link
                  href={step.href}
                  className="cursor-pointer border-b border-accent/30 pb-0.5 text-[11px] uppercase tracking-[0.2em] text-accent transition-colors duration-200 hover:border-foreground/40 hover:text-foreground"
                >
                  {step.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 text-center"
        >
          <Link
            href="/urunler"
            className="inline-flex cursor-pointer items-center justify-center bg-accent px-10 py-4 text-[12px] uppercase tracking-[0.22em] text-accent-foreground shadow-[0_12px_40px_-12px_rgba(143,115,88,0.45)] transition-opacity duration-200 hover:opacity-90"
          >
            Ritüel yağımı seç
          </Link>
          <p className="mt-4 text-xs font-light text-muted-foreground">
            Güvenli ödeme ile Shopify üzerinden tamamla · İade politikası mağazada
          </p>
        </motion.div>
      </div>
    </section>
  );
}
