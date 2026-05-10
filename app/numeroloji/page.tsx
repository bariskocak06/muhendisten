"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NumerologyInput, AuroraProfile } from "@/lib/numerology/types";
import { calculateAuroraProfile } from "@/lib/numerology/auroraCalc";
import { AnalysisForm } from "@/components/numerology/AnalysisForm";
import { ResultDashboard } from "@/components/numerology/ResultDashboard";

export default function NumerologyPage() {
  const [profile, setProfile] = useState<AuroraProfile | null>(null);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalysis = async (data: NumerologyInput) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const result = calculateAuroraProfile(
      data.firstName,
      data.lastName,
      data.birthDate
    );
    setProfile(result);
    setUserName(`${data.firstName} ${data.lastName}`);
    setIsLoading(false);
  };

  const handleReset = () => {
    setProfile(null);
    setUserName("");
  };

  if (profile) {
    return (
      <div className="px-4 pb-24 pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:px-6 md:pt-36">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <button
              type="button"
              onClick={handleReset}
              className="min-h-[44px] touch-manipulation rounded-md border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              Yeni Analiz
            </button>
          </div>
          <ResultDashboard profile={profile} userName={userName} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center px-4 pb-24 pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:px-6 md:pt-36">
      <div className="flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Numeroloji & Enerji Analizi
          </p>
          <h1 className="font-heading mb-6 text-[clamp(2rem,10vw,4.5rem)] font-light text-foreground md:text-7xl">
            Ruhunun İzini Sür
          </h1>
          <p className="mx-auto max-w-lg px-1 text-pretty leading-relaxed text-muted-foreground">
            Kadim bilgilerin ışığında, isminiz ve doğum anınızın sakladığı
            potansiyeli keşfedin. Frekansınız, kaderinizdir.
          </p>
        </motion.div>

        <AnalysisForm onSubmit={handleAnalysis} isLoading={isLoading} />
      </div>
    </div>
  );
}
