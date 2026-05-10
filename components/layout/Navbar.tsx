"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/cakra-testi", label: "Çakra Testi" },
    { href: "/urunler", label: "Ürünler" },
    { href: "/numeroloji", label: "Nümeroloji" },
    { href: "/hakkimizda", label: "Hakkımızda" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/88 backdrop-blur-lg border-b border-border/70 shadow-[0_8px_30px_-12px_rgba(42,38,34,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex min-h-[5.75rem] items-center justify-between px-6 py-3 sm:min-h-[6.25rem] sm:px-8 md:min-h-[7rem] md:py-4">
        <Link
          href="/"
          className="font-heading text-2xl tracking-wide text-foreground transition-colors hover:text-accent sm:text-[1.65rem] md:text-3xl lg:text-[2rem] cursor-pointer"
        >
          Mühendis&apos;ten
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-11">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] transition-colors duration-200 tracking-[0.16em] uppercase lg:text-[15px] cursor-pointer ${
                link.href === "/urunler"
                  ? "font-medium text-accent hover:text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="cursor-pointer text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-b border-border"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-base tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
