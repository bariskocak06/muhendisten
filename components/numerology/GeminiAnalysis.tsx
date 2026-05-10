"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import type { AuroraProfile } from "@/lib/numerology/types";

interface Props {
  profile: AuroraProfile;
  userName: string;
}

export function GeminiAnalysis({ profile, userName }: Props) {
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/numerology-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile, userName }),
      });
      const data = (await res.json()) as { report?: string; error?: string };
      if (!res.ok) {
        setError(data.error ?? "Bir hata oluştu.");
        return;
      }
      if (data.report) {
        setReport(data.report);
      } else {
        setError("Analiz alınamadı.");
      }
    } catch {
      setError("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mt-16 border-t border-border pt-12">
      <div className="mb-10 text-center">
        <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-spirit/75">
          Yapay zekâ yorumu
        </p>
        <h3 className="font-heading text-2xl font-light text-foreground md:text-3xl">
          Mühendisten özel analiz
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground">
          Sayıların ötesine geçerek niyetini, potansiyelini ve dönüşüm alanlarını
          derinlemesine oku.
        </p>

        {!report && (
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading}
            className="mt-8 inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-full border border-accent/35 bg-accent px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-accent-foreground shadow-[0_8px_28px_-8px_rgba(143,115,88,0.35)] transition-all hover:bg-accent/92 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-h-0 sm:px-10 sm:py-3.5 sm:tracking-[0.22em]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-foreground/90 [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-foreground/90 [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-foreground/90" />
                </span>
                Yazılıyor…
              </span>
            ) : (
              "Detaylı Ruhsal Raporu Oku"
            )}
          </button>
        )}

        {error && (
          <p className="mx-auto mt-6 max-w-md text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>

      {report && (
        <div className="relative rounded-[1.5rem] border border-border bg-card/80 p-8 shadow-[0_20px_48px_-20px_rgba(42,38,34,0.12)] backdrop-blur-sm md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-accent/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b border-r border-accent/25"
          />

          <article
            className="markdown-report max-w-none space-y-4 text-[15px] font-light leading-relaxed text-muted-foreground
              [&_h1]:font-heading [&_h1]:text-2xl [&_h1]:text-foreground
              [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:text-foreground
              [&_h3]:mt-6 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:text-foreground
              [&_p]:leading-relaxed
              [&_strong]:font-normal [&_strong]:text-foreground
              [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6
              [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6
              [&_li]:my-1"
          >
            <ReactMarkdown>{report}</ReactMarkdown>
          </article>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setReport(null)}
              className="border-b border-transparent pb-0.5 text-[11px] uppercase tracking-[0.2em] text-spirit transition-colors hover:border-spirit/40 hover:text-foreground"
            >
              Raporu kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
