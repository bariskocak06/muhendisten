import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/80 bg-gradient-to-b from-transparent to-muted/30 pb-[max(3rem,env(safe-area-inset-bottom,0px)+1.5rem)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="font-heading text-2xl text-foreground tracking-wide">
              Mühendis&apos;ten
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
                  className="inline-flex min-h-[40px] items-center text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="/cakra-testi"
                  className="inline-flex min-h-[40px] items-center text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Çakra Testi
                </Link>
              </li>
              <li>
                <Link
                  href="/numeroloji"
                  className="inline-flex min-h-[40px] items-center text-sm text-foreground/70 transition-colors hover:text-foreground"
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
                  className="inline-flex min-h-[40px] items-center text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Etsy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Mühendis&apos;ten. Tüm hakları saklıdır.
          </p>
          <Link
            href="/cakra-testi"
            className="inline-flex min-h-[44px] items-center text-xs text-accent underline-offset-4 hover:underline"
          >
            Ritüeline başla &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
