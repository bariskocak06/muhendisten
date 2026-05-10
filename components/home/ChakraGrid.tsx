"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getChakraProducts } from "@/data/products";
import type { Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

function ChakraAuroraOrb({ hex, delaySec }: { hex: string; delaySec: number }) {
  return (
    <div
      className="relative h-[3.75rem] w-[3.75rem] shrink-0"
      style={{ animationDelay: `${delaySec}s` }}
    >
      <div
        className="aurora-pulse-soft absolute -inset-3 rounded-full blur-2xl opacity-70"
        style={{
          backgroundColor: hex,
          boxShadow: `0 0 48px 12px ${hex}44`,
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
            0 0 28px -2px ${hex},
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
      {/* Aurora arka plan */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="aurora-drift-1 absolute -left-[18%] top-[8%] h-[min(72vw,560px)] min-h-[280px] w-[min(72vw,560px)] rounded-full bg-violet-400/40 blur-[100px]" />
        <div className="aurora-drift-2 absolute -right-[12%] top-[18%] h-[min(68vw,520px)] min-h-[260px] w-[min(68vw,520px)] rounded-full bg-cyan-400/35 blur-[96px]" />
        <div className="aurora-drift-3 absolute bottom-[-8%] left-[15%] hidden h-[min(60vw,480px)] min-h-[240px] w-[min(88vw,680px)] rounded-full bg-fuchsia-400/30 blur-[118px] md:block" />
        <div className="aurora-drift-1 absolute bottom-[12%] right-[5%] hidden h-[min(50vw,400px)] w-[min(50vw,400px)] rounded-full bg-emerald-400/25 blur-[88px] [animation-delay:-7s] lg:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f1ea]/90 via-[#f3eef8]/75 to-[#f0f5f3]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_20%,rgba(255,255,255,0.45),transparent_65%)]" />
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
          <h2 className="font-heading text-4xl font-light leading-[1.12] text-foreground md:text-5xl lg:text-[3.35rem]">
            Hangi çakra bugün{" "}
            <span className="bg-gradient-to-r from-indigo-500/85 via-teal-600/75 to-rose-500/80 bg-clip-text italic text-transparent">
              seninle konuşuyor?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            Her yağ bir çakraya seslenir; içindeki taş ve niyet cümlesi o bağın
            hatırlatıcısıdır.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {chakraProducts.map((product: Product, i: number) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/urunler/${product.slug}`}
                className="group block cursor-pointer"
              >
                <div className="card-aurora h-full rounded-3xl p-7 transition-all duration-500 ease-out sm:p-8 group-hover:-translate-y-1 group-hover:shadow-[0_28px_64px_-18px_rgba(139,92,246,0.18)]">
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <ChakraAuroraOrb
                      hex={product.chakraColor}
                      delaySec={i * 0.22}
                    />
                    <span className="pt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/90">
                      {product.price.toLocaleString("tr-TR")} TL
                    </span>
                  </div>
                  <h3 className="mb-1.5 font-heading text-xl text-foreground">
                    {product.chakra}
                  </h3>
                  <p className="mb-5 text-[13px] font-light leading-relaxed text-muted-foreground">
                    {product.theme}
                  </p>
                  <div className="flex items-center justify-between gap-2 border-t border-white/35 pt-3">
                    <span className="text-sm font-normal tracking-wide text-foreground">
                      {product.name}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-indigo-500/70 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal-600/80 group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
