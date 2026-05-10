"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProductBySlug, products } from "@/data/products";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="px-4 pb-24 pt-[calc(7rem+env(safe-area-inset-top,0px))] text-center sm:px-6 md:pt-36">
        <h1 className="font-heading mb-4 text-3xl sm:text-4xl">Ürün Bulunamadı</h1>
        <Link href="/urunler" className="text-accent hover:underline cursor-pointer">
          Ürünlere Dön
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        !p.isSignature &&
        p.slug !== "7li-cakra-seti"
    )
    .slice(0, 3);

  return (
    <div className="px-4 pb-16 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:px-6 md:pt-32">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/urunler"
          className="mb-10 inline-flex min-h-[44px] touch-manipulation items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Tüm Ürünler
        </Link>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center rounded-2xl card-spirit aspect-square"
          >
            <div
              className="w-40 h-40 rounded-full"
              style={{
                background: `radial-gradient(circle, ${product.chakraColor}30, ${product.chakraColor}08, transparent)`,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: product.chakraColor }}
              />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                {product.chakra}
              </span>
            </div>

            <h1 className="font-heading text-[clamp(1.75rem,6vw,3rem)] font-light text-foreground mb-2 break-words md:text-5xl">
              {product.name}
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  İçerik
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-xs px-3 py-1.5 bg-muted text-foreground/80 rounded-none"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Doğal Taş
                </h3>
                <p className="text-sm text-foreground">{product.stone}</p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Niyet Cümlesi
                </h3>
                <p className="font-heading text-lg italic leading-relaxed text-foreground/80 break-words">
                  &ldquo;{product.intention}&rdquo;
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Kullanım
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.usage}
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="font-heading text-3xl text-foreground">
                  {product.price.toLocaleString("tr-TR")} TL
                </span>
                {product.premiumPrice && (
                  <span className="text-sm text-muted-foreground">
                    Premium: {product.premiumPrice.toLocaleString("tr-TR")} TL
                  </span>
                )}
              </div>

              <a
                href={product.shopifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center gap-2 bg-accent px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] text-accent-foreground shadow-[0_12px_36px_-10px_rgba(143,115,88,0.5)] transition-opacity duration-200 hover:opacity-90 sm:w-auto"
              >
                Satın Al
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-border pt-12 md:mt-24 md:pt-16">
          <h2 className="font-heading mb-8 text-center text-2xl font-light text-foreground sm:mb-10 sm:text-3xl">
            İlgili Ürünler
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/urunler/${p.slug}`}
                className="block cursor-pointer group"
              >
                <div className="card-spirit rounded-2xl p-6 transition-all duration-300 sm:p-8">
                  <div
                    className="w-6 h-6 rounded-full mb-4 opacity-60"
                    style={{ backgroundColor: p.chakraColor }}
                  />
                  <h3 className="font-heading text-lg text-foreground">
                    {p.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{p.theme}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
