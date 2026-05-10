import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Mühendis'ten | Çakrana Uygun Ritüel Yağı",
  description:
    "Mühendis'ten — çakrana uyumlu ritüel yağları, doğal taş ve niyet. Ücretsiz çakra testi ve nümeroloji ile yağını keşfet.",
  keywords:
    "Mühendis'ten, çakra yağı, esansiyel yağ, nümeroloji, ritüel, doğal taş, enerji, meditasyon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col overflow-x-clip antialiased">
        <Navbar />
        <main className="flex min-h-0 flex-1 flex-col overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
