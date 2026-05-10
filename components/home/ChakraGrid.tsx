"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getChakraProducts } from "@/data/products";
import type { Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

/** Conversion CTAs — unique per chakra oil (slugs unchanged). */
const CHAKRA_CARD_CTA: Record<string, string> = {
  "koklenme-yagi": "Ritüelimi seç",
  "akis-yagi": "Akışı hisset",
  "guc-yagi": "Gücümü bul",
  "kalp-acilim-yagi": "Kalbimi aç",
  "ifade-yagi": "Sesimi netleştir",
  "sezgi-yagi": "Sezgime kulak ver",
  "yuksek-bilinc-yagi": "Derinleş",
};

function ChakraAuroraOrb({ hex, delaySec }: { hex: string; delaySec: number }) {
  return (
    <div
      className="relative h-[3.75rem] w-[3.75rem] shrink-0 transition-transform duration-500 ease-out group-hover:scale-110"
      style={{ animationDelay: `${delaySec}s` }}
    >
      <div
        className="aurora-pulse-soft absolute -inset-3 rounded-full blur-2xl opacity-65 transition-all duration-500 group-hover:opacity-95 group-hover:blur-3xl"
        style={{
          backgroundColor: hex,
          boxShadow: `0 0 40px 10px ${hex}40`,
          animationDelay: `${delaySec}s`,
        }}
      />
      <div
        className="absolute inset-0 rounded-full border border-white/55 shadow-inner"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 28% 22%, rgba(255,255,255,0.92), transparent 52%),
            radial-gradient(circle at 75% 78%, rgba(255,255,255,0.15), transparent 45%),
            linear-gradient(148deg, ${hex}, ${hex}cc 42%, rgba(255,255,255,0.38))
          `,
          boxShadow: `
            0 0 24px -2px ${hex},
            inset 0 2px 12px rgba(255,255,255,0.35)
          `,
        }}
      />
    </div>
  );
}

export function ChakraGrid() {
  const chakraProducts = getChakraProducts();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="aurora-drift-1 absolute -left-[18%] top-[8%] h-[min(72vw,560px)] min-h-[280px] w-[min(72vw,560px)] rounded-full bg-violet-400/38 blur-[100px]" />
        <div className="aurora-drift-2 absolute -right-[12%] top-[18%] h-[min(68vw,520px)] min-h-[260px] w-[min(68vw,520px)] rounded-full bg-cyan-400/32 blur-[96px]" />
        <div className="aurora-drift-3 absolute bottom-[-8%] left-[15%] hidden h-[min(60vw,480px)] min-h-[240px] w-[min(88vw,680px)] rounded-full bg-fuchsia-400/28 blur-[118px] md:block" />
        <div className="aurora-drift-1 absolute bottom-[12%] right-[5%] hidden h-[min(50vw,400px)] w-[min(50vw,400px)] rounded-full bg-emerald-400/22 blur-[88px] [animation-delay:-7s] lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f1ea]/92 via-[#f3eef8]/78 to-[#f0f5f3]/94" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_18%,rgba(255,255,255,0.48),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.38em] text-spirit/75">
            Yedi enerji merkezi
          </p>
          <h2 className="font-heading text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.35rem]">
            Hangi çakra bugün{" "}
            <span className="bg-gradient-to-r from-indigo-500/85 via-teal-600/75 to-rose-500/80 bg-clip-text italic text-transparent">
              seninle konuşuyor?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            Her yağ bir çakraya seslenir; taş ve niyet cümlesi o enerjinin hatırlatıcısıdır.
            Bugün hangi ritüele eşlik etmesini istediğini seç.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-9">
          {chakraProducts.map((product: Product, i: number) => {
            const cta =
              CHAKRA_CARD_CTA[product.slug] ?? "Ürünü keşfet";
            const hex = product.chakraColor;

            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 28,
                  }}
                >
                  <Link
                    href={`/urunler/${product.slug}`}
                    className="group block cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f1ea]"
                  >
                    <div
                      className="card-aurora chakra-card-dynamic relative flex h-full min-h-[min(22rem,72vw)] flex-col overflow-hidden rounded-[1.65rem] p-7 sm:min-h-[20rem] sm:p-8 transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      style={
                        {
                          "--chakra-color": hex,
                        } as CSSProperties
                      }
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-7 top-0 z-[1] h-[3px] rounded-full opacity-95"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${hex}99, ${hex}, ${hex}99, transparent)`,
                        }}
                      />
                      {/* Hover wash — chakra-tinted */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background: `
                            radial-gradient(ellipse 120% 72% at 50% -12%, ${hex}42, transparent 54%),
                            radial-gradient(ellipse 85% 55% at 100% 100%, ${hex}24, transparent 48%)
                          `,
                        }}
                        aria-hidden
                      />

                      <div className="relative flex flex-1 flex-col">
                        <div className="mb-6 flex items-start justify-between gap-3">
                          <ChakraAuroraOrb
                            hex={hex}
                            delaySec={i * 0.22}
                          />
                          <span className="rounded-full border border-white/45 bg-white/35 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm transition-colors duration-300 group-hover:border-white/65 group-hover:bg-white/50">
                            {product.price.toLocaleString("tr-TR")}{" "}
                            <span className="text-foreground/85">TL</span>
                          </span>
                        </div>

                        <h3 className="mb-2 font-heading text-[1.35rem] font-normal leading-tight tracking-tight text-foreground md:text-xl">
                          {product.chakra}
                        </h3>
                        <p className="mb-6 line-clamp-3 flex-1 text-[13px] font-light leading-relaxed text-muted-foreground sm:line-clamp-4">
                          {product.theme}
                        </p>

                        <div className="mt-auto space-y-4 border-t border-white/40 pt-4">
                          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/55">
                            {product.name}
                          </p>
                          <span className="flex w-full items-center justify-center gap-2 rounded-full border border-white/55 bg-gradient-to-r from-white/45 via-white/38 to-white/45 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_6px_24px_-10px_rgba(110,90,122,0.12)] backdrop-blur-md transition-all duration-300 group-hover:border-white/85 group-hover:from-white/65 group-hover:via-white/55 group-hover:to-white/65 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_14px_44px_-12px_rgba(110,90,122,0.22),0_0_28px_-8px_color-mix(in_srgb,var(--chakra-color)_28%,transparent)]">
                            {cta}
                            <ArrowRight
                              className="h-3.5 w-3.5 shrink-0 opacity-80 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                              strokeWidth={2}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
