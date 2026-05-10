"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NumerologyInput } from "@/lib/numerology/types";

interface Props {
  onSubmit: (data: NumerologyInput) => void;
  isLoading: boolean;
}

export function AnalysisForm({ onSubmit, isLoading }: Props) {
  const [data, setData] = useState<NumerologyInput>({
    firstName: "",
    lastName: "",
    birthDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.firstName && data.lastName && data.birthDate) {
      onSubmit(data);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full max-w-lg"
    >
      <div className="bg-white border border-border p-8 md:p-10">
        <div className="text-center mb-8">
          <h3 className="font-heading text-xl text-foreground mb-2">
            Analiz Başlangıcı
          </h3>
          <div className="h-px w-12 bg-foreground/20 mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                İsim
              </label>
              <input
                type="text"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
                placeholder="Adınız"
                required
                className="w-full bg-muted border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Soyisim
              </label>
              <input
                type="text"
                value={data.lastName}
                onChange={(e) =>
                  setData({ ...data, lastName: e.target.value })
                }
                placeholder="Soyadınız"
                required
                className="w-full bg-muted border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Doğum Tarihi
            </label>
            <input
              type="date"
              value={data.birthDate}
              onChange={(e) =>
                setData({ ...data, birthDate: e.target.value })
              }
              required
              className="w-full bg-muted border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 px-8 py-3.5 bg-foreground text-background text-[13px] tracking-widest uppercase hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isLoading ? "Hesaplanıyor..." : "Yolculuğu Başlat"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
