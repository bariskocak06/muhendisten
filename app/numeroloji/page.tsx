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
      <div className="px-6 pb-24 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={handleReset}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border px-4 py-2 hover:border-foreground/30 cursor-pointer"
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
    <div className="flex min-h-[100dvh] items-center justify-center px-6 pb-24 pt-32 md:pt-36">
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
          <h1 className="font-heading text-5xl md:text-7xl font-light text-foreground mb-6">
            Ruhunun İzini Sür
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Kadim bilgilerin ışığında, isminiz ve doğum anınızın sakladığı
            potansiyeli keşfedin. Frekansınız, kaderinizdir.
          </p>
        </motion.div>

        <AnalysisForm onSubmit={handleAnalysis} isLoading={isLoading} />
      </div>
    </div>
  );
}
