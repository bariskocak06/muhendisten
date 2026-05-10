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
      <div className="px-6 pb-24 pt-32 text-center md:pt-36">
        <h1 className="font-heading text-4xl mb-4">Ürün Bulunamadı</h1>
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
    <div className="px-6 pb-16 pt-28 md:pt-32">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/urunler"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Tüm Ürünler
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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

            <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-2">
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
                <p className="font-heading italic text-lg text-foreground/80">
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
              <div className="flex items-center gap-4 mb-6">
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
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground text-[12px] tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-200 cursor-pointer shadow-[0_12px_36px_-10px_rgba(143,115,88,0.5)]"
              >
                Satın Al
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 border-t border-border pt-16">
          <h2 className="font-heading text-3xl font-light text-center mb-10">
            İlgili Ürünler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/urunler/${p.slug}`}
                className="block cursor-pointer group"
              >
                <div className="rounded-2xl card-spirit p-8 transition-all duration-300">
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
