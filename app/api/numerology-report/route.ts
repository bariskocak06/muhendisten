import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "@/lib/numerology/auroraText";
import type { AuroraProfile } from "@/lib/numerology/types";

export const runtime = "nodejs";

function buildUserPrompt(profile: AuroraProfile, name: string): string {
  return `
Lütfen aşağıdaki profil için detaylı bir Aurora Numeroloji Analizi yap.

Kullanıcı: ${name}

Veriler:
- Kader Yolu (Life Path): ${profile.lifePathNumber}
- Tam İsim Frekansı (TİF): ${profile.fullNameNumber}
- Ruh Güdüsü (Soul): ${profile.soulNumber}
- Kişilik (Personality): ${profile.personalityNumber}
- Eksik Sayılar (Karmik Borç): ${profile.missingNumbers.join(", ") || "Yok"}
- Aşırı Sayılar (Frekans Aşımı): ${profile.excessNumbers.join(", ") || "Yok"}
- Element Dengesi: Ateş %${profile.balance.fire}, Su %${profile.balance.water}, Hava %${profile.balance.air}, Toprak %${profile.balance.earth}, Ruh %${profile.balance.soul}
${profile.auroraMirror ? `- Aynalı Frekans (Aurora Mirror): ${profile.auroraMirror}` : ""}

Lütfen "Aurora Master Sonuç" formatında, element dengesizliklerini ve karmik dersleri vurgulayarak yorumla.
`.trim();
}

export async function POST(request: Request) {
  const apiKey =
    process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY ?? "";

  if (!apiKey) {
    return Response.json(
      {
        error:
          "Detaylı analiz için sunucuda GEMINI_API_KEY (veya GOOGLE_API_KEY) tanımlı olmalıdır.",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Geçersiz istek gövdesi." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("profile" in body) ||
    !("userName" in body)
  ) {
    return Response.json({ error: "Eksik alanlar." }, { status: 400 });
  }

  const { profile, userName } = body as {
    profile: AuroraProfile;
    userName: string;
  };

  if (
    typeof userName !== "string" ||
    !profile ||
    typeof profile.lifePathNumber !== "number"
  ) {
    return Response.json({ error: "Geçersiz profil verisi." }, { status: 400 });
  }

  const ai = new GoogleGenAI({ apiKey });
  const prompt = buildUserPrompt(profile, userName.trim());

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    const text = response.text?.trim();
    if (!text) {
      return Response.json(
        { error: "Analiz metni oluşturulamadı." },
        { status: 502 }
      );
    }

    return Response.json({ report: text });
  } catch (err) {
    console.error("Gemini API:", err);
    return Response.json(
      {
        error:
          "Şu anda detaylı analiz servisine ulaşılamıyor. Lütfen daha sonra tekrar deneyin.",
      },
      { status: 502 }
    );
  }
}
