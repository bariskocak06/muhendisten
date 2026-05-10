"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { quizQuestions, chakraToProduct, chakraColors } from "@/lib/chakra-config";
import { getProductBySlug } from "@/data/products";
import { ArrowRight } from "lucide-react";

type ChakraKey = keyof typeof chakraColors;

export default function ChakraTestPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (chakra: string) => {
    const newAnswers = [...answers, chakra];
    setAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const counts: Record<string, number> = {};
      newAnswers.forEach((a) => {
        counts[a] = (counts[a] || 0) + 1;
      });
      const dominant = Object.entries(counts).sort(
        (a, b) => b[1] - a[1]
      )[0][0];
      setResult(dominant);
    }
  };

  if (result) {
    const productSlug = chakraToProduct[result];
    const product = getProductBySlug(productSlug);
    const color = chakraColors[result as ChakraKey];

    return (
      <div className="flex min-h-[100dvh] items-center justify-center px-6 pb-16 pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <div
            className="w-20 h-20 rounded-full mx-auto mb-8"
            style={{ backgroundColor: color }}
          />

          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Senin için
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-2">
            {product?.chakra}
          </h1>
          <h2 className="font-heading text-2xl text-foreground/70 mb-6">
            {product?.name}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            {product?.description}
          </p>

          <p className="font-heading italic text-lg text-foreground/70 mb-10">
            &ldquo;{product?.intention}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/urunler/${productSlug}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground text-[12px] tracking-[0.2em] uppercase hover:opacity-90 transition-opacity cursor-pointer shadow-[0_12px_36px_-10px_rgba(143,115,88,0.45)]"
            >
              Bu Yağı Keşfet
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/urunler/7li-cakra-seti"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-foreground/20 text-foreground text-[13px] tracking-widest uppercase hover:border-foreground/50 transition-colors cursor-pointer"
            >
              7&apos;li Seti Keşfet
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = quizQuestions[currentStep];

  return (
    <div className="flex min-h-[100dvh] items-center justify-center px-6 pb-16 pt-28 md:pt-32">
      <div className="w-full max-w-xl">
        <div className="mb-10 flex gap-1.5">
          {quizQuestions.map((_, i) => (
            <div
              key={i}
              className="h-0.5 flex-1 transition-all duration-300"
              style={{
                background:
                  i <= currentStep ? "var(--foreground)" : "var(--border)",
              }}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest">
              Soru {currentStep + 1} / {quizQuestions.length}
            </p>

            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-10">
              {question.question}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {question.options.map((option) => (
                <motion.button
                  key={option.text}
                  whileHover={{ backgroundColor: "var(--muted)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.chakra)}
                  className="text-left px-5 py-4 border border-border bg-white text-foreground hover:border-foreground/30 transition-colors duration-200 cursor-pointer"
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
