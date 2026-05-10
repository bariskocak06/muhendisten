"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] px-6 pb-24 pt-32 md:pt-36">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Hikayemiz
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-foreground">
            Hakkımızda
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            Mühendis'ten olarak her insanın kendine özgü bir enerji frekansı
            taşıdığına inanır. Bu frekansı keşfetmek, dengelemek ve
            güçlendirmek için doğanın en saf hediyelerini — esansiyel yağları ve
            doğal taşları — bir araya getiriyoruz.
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            Her yağımız bir niyet taşır. 7 çakraya özel hazırlanan
            formüllerimiz, binlerce yıllık bilgeliği modern ritüellerle
            buluşturur. Amacımız sadece bir ürün sunmak değil; bir dönüşüm
            yolculuğuna eşlik etmektir.
          </p>

          <div className="border-l-2 border-foreground/20 pl-6 my-12">
            <p className="font-heading italic text-foreground/70 text-2xl">
              &ldquo;Her yağ bir niyet taşır, her niyet bir dönüşüm başlatır.&rdquo;
            </p>
          </div>

          <h2 className="font-heading text-3xl font-light text-foreground mt-12 mb-4">
            Misyonumuz
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            İnsanların kendi iç dünyalarıyla bağ kurmalarına, günlük yaşamda
            bilinçli ritüeller oluşturmalarına ve enerjilerini dengelemelerine
            yardımcı olmak. Nümeroloji, çakra bilgisi ve aromaterapi bilimini
            birleştirerek kişiye özel deneyimler sunuyoruz.
          </p>

          <h2 className="font-heading text-3xl font-light text-foreground mt-12 mb-4">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
            <div className="bg-white p-8 text-center">
              <h3 className="font-heading text-lg text-foreground mb-2">Saflık</h3>
              <p className="text-sm text-muted-foreground">
                %100 doğal, saf esansiyel yağlar ve organik taşıyıcı yağlar kullanıyoruz.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <h3 className="font-heading text-lg text-foreground mb-2">Niyet</h3>
              <p className="text-sm text-muted-foreground">
                Her ürün bilinçli bir niyetle hazırlanır ve enerjisel olarak programlanır.
              </p>
            </div>
            <div className="bg-white p-8 text-center">
              <h3 className="font-heading text-lg text-foreground mb-2">Dönüşüm</h3>
              <p className="text-sm text-muted-foreground">
                Sadece bir ürün değil, kişisel gelişim ve ruhsal yolculuk sunuyoruz.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
