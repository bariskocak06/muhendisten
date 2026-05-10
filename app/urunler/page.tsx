"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="px-4 pb-16 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:px-6 md:pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-spirit/80 mb-4">
            Koleksiyon
          </p>
          <h1 className="font-heading text-[clamp(2rem,9vw,3.75rem)] font-light text-foreground sm:text-5xl md:text-6xl">
            Ritüel yağların
          </h1>
          <p className="mt-5 text-sm text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
            Birini seç veya set ile tüm çakrana sırayla eşlik et.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link href={`/urunler/${product.slug}`} className="block cursor-pointer group">
                <div className="card-spirit h-full rounded-2xl p-6 transition-all duration-300 sm:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-10 h-10 rounded-full opacity-75 ring-4 ring-white/70 shadow-inner group-hover:opacity-100 transition-opacity duration-200"
                      style={{
                        backgroundColor: product.chakraColor,
                        boxShadow: `0 0 20px -4px ${product.chakraColor}44`,
                      }}
                    />
                    <ArrowRight
                      className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="font-heading text-xl text-foreground mb-0.5">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 tracking-wide">
                    {product.chakra}
                  </p>
                  <p className="text-[13px] text-muted-foreground mb-6 leading-relaxed">
                    {product.theme}
                  </p>
                  <span className="text-sm text-foreground">
                    {product.price.toLocaleString("tr-TR")} TL
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
