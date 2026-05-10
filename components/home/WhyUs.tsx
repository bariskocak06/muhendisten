"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Gem, Layers } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Sana özel ritüel",
    description:
      "Nümeroloji ve çakra uyumuyla seçilen yağlar; kendine küçük bir tören alanı açman için.",
  },
  {
    icon: Gem,
    title: "Doğal taş eşlikçisi",
    description:
      "Her pakette çakrana uygun taş — bedende ve masanda görünür bir enerji köprüsü.",
  },
  {
    icon: Layers,
    title: "Yedi niyet, yedi yağ",
    description:
      "İstersen tek tek, istersen tam set: merkezlerini sırayla besleyen bir koleksiyon.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-t from-muted/40 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-spirit/80 mb-4">
            Neden şimdi
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Sakin bir adım,{" "}
            <span className="italic text-foreground/85">net bir niyet</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed font-light">
            Panik satışı yok. Sadece ürünün hikâyesi, içeriği ve sana nasıl
            eşlik edeceği — kararı yine sen veriyorsun.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="text-center rounded-2xl card-spirit px-6 py-10"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-spirit/8 mb-6 ring-1 ring-spirit/15">
                  <Icon className="w-5 h-5 text-spirit" strokeWidth={1.25} />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-border/80 bg-card/50 backdrop-blur-sm px-8 py-10 text-center"
        >
          <p className="font-heading text-xl md:text-2xl font-light text-foreground italic leading-snug max-w-lg mx-auto">
            “Bugün hangi çakranda durduğunu bilmek, yarın hangi niyeti seçeceğini
            kolaylaştırır.”
          </p>
          <Link
            href="/urunler"
            className="inline-flex mt-8 items-center justify-center px-8 py-3.5 text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-accent border border-accent/35 hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
          >
            Koleksiyona bak · Satın almaya hazır ol
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
