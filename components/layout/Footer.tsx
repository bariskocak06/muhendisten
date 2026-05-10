import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/80 mt-24 bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="font-heading text-2xl text-foreground tracking-wide">
              Mühendis'ten
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm font-light">
              Esansiyel yağlar, doğal taşlar ve niyet cümleleri — acelesi olmayan,
              sana ait küçük ritüeller için.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Keşfet
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/urunler"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="/cakra-testi"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                >
                  Çakra Testi
                </Link>
              </li>
              <li>
                <Link
                  href="/numeroloji"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                >
                  Nümeroloji
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Takip Et
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                >
                  Etsy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Mühendis'ten. Tüm hakları saklıdır.
          </p>
          <Link
            href="/cakra-testi"
            className="text-xs text-accent hover:underline cursor-pointer"
          >
            Ritüeline başla &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
