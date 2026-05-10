import { NumberMeaning, EnergyType } from './types';

export const AURORA_MEANINGS: Record<number, NumberMeaning> = {
  1: {
    keywords: ["Liderlik", "Başlangıç", "Ego", "Cesaret"],
    element: EnergyType.FIRE,
    chakra: "Solar Pleksus",
    archetype: "Savaşçı / Lider",
    light: ["Öncü", "Bağımsız", "Hızlı Karar", "Koruyucu"],
    shadow: ["Kibir", "Öfke", "Baskıcı", "Bencil"],
  },
  2: {
    keywords: ["Duygu", "Uyum", "İlişki", "Empati"],
    element: EnergyType.WATER,
    chakra: "Sakral",
    archetype: "Aşık / Destekleyici",
    light: ["Nazik", "Diplomatik", "Sadık", "Sezgisel"],
    shadow: ["Bağımlı", "Kırılgan", "Aşırı Hassas", "Kararsız"],
  },
  3: {
    keywords: ["Düzen", "İfade", "Disiplin", "Strateji"],
    element: EnergyType.FIRE,
    chakra: "Solar Pleksus",
    archetype: "Komutan / Sistem Kurucu",
    light: ["Organize", "Net", "Sosyal", "Yaratıcı"],
    shadow: ["Dağınık", "Eleştirel", "Sert", "Yüzeysel"],
  },
  4: {
    keywords: ["Sabır", "Köklenme", "Güven", "İnşa"],
    element: EnergyType.EARTH,
    chakra: "Kök",
    archetype: "İnşa Eden / Gerçekçi",
    light: ["Güvenilir", "Çalışkan", "Pratik", "Sadık"],
    shadow: ["İnatçı", "Katı", "Vizyonsuz", "Aşırı Garantici"],
  },
  5: {
    keywords: ["Değişim", "Özgürlük", "İletişim", "Zeka"],
    element: EnergyType.AIR,
    chakra: "Boğaz",
    archetype: "Gezgin / İletişimci",
    light: ["Hızlı", "Esnek", "Maceracı", "İkna Edici"],
    shadow: ["Kaotik", "Dürtüsel", "Güvenilmez", "Bağımlı"],
  },
  6: {
    keywords: ["Aile", "Sorumluluk", "Sevgi", "Hizmet"],
    element: EnergyType.WATER,
    chakra: "Kalp",
    archetype: "Ebeveyn / Koruyucu",
    light: ["Şefkatli", "Sorumlu", "Estetik", "İyileştirici"],
    shadow: ["Kıskanç", "Müdahaleci", "Mükemmeliyetçi", "Şehit"],
  },
  7: {
    keywords: ["Bilgelik", "Analiz", "Ruhsallık", "Yalnızlık"],
    element: EnergyType.SOUL,
    chakra: "Üçüncü Göz",
    archetype: "Bilge / Araştırmacı",
    light: ["Derin", "Analitik", "Spiritüel", "Zeki"],
    shadow: ["Mesafeli", "Kuşkucu", "Melankolik", "Soğuk"],
  },
  8: {
    keywords: ["Güç", "Para", "Yönetim", "Otorite"],
    element: EnergyType.EARTH,
    chakra: "Taç / Kök",
    archetype: "Yönetici / Kral",
    light: ["Başarılı", "Güçlü", "Vizyoner", "Organizatör"],
    shadow: ["Materyalist", "Baskıcı", "Hırslı", "Acımasız"],
  },
  9: {
    keywords: ["Tamamlanma", "Şifa", "Evrensel Sevgi", "Sanat"],
    element: EnergyType.WATER,
    chakra: "Kalp / Taç",
    archetype: "Şifacı / Hümanist",
    light: ["Cömert", "Sanatsal", "Anlayışlı", "Fedakar"],
    shadow: ["Dramatik", "Dağınık", "Kurban", "Gerçeklerden Kopuk"],
  },
  11: {
    keywords: ["Aydınlanma", "İlham", "Sezgi", "Vizyon"],
    element: EnergyType.SOUL,
    chakra: "Taç (Üst)",
    archetype: "Işık İşçisi",
    light: ["İlham Veren", "Kanal", "Yüksek Sezgi"],
    shadow: ["Gergin", "Fanatik", "Hayalperest"],
  },
  22: {
    keywords: ["Usta İnşacı", "Büyük Plan", "Gerçekleştirme"],
    element: EnergyType.EARTH,
    chakra: "Taç (Üst)",
    archetype: "Usta Mimar",
    light: ["Vizyonu Maddeye Döken", "Global Etki"],
    shadow: ["Yıkıcı", "Aşırı Hırs", "Manipülatif"],
  },
  33: {
    keywords: ["Üstad Öğretmen", "Koşulsuz Sevgi", "Hizmet"],
    element: EnergyType.WATER,
    chakra: "Taç (Üst)",
    archetype: "İlahi Şifacı",
    light: ["Evrensel Şefkat", "Ruhsal Rehber"],
    shadow: ["Duygusal Çöküş", "Kendini Feda"],
  },
};

/** Gemini ile detaylı rapor için sistem talimatı (Türkçe çıktı). */
export const SYSTEM_PROMPT = `
You are the AI implementation of the "Aurora Numerology System".
Your goal is to provide deep, mystical, yet precise personality analysis based on the user's numerology chart.

Key Concepts of Aurora System:
1. **Frekans Daralması (Frequency Contraction):** When a number is missing from the name/birthdate, that Chakra is blocked or weak.
2. **Frekans Aşımı (Frequency Excess):** When a number appears 4 or more times, that energy is explosive or controlling.
3. **Aurora Mirror:** If a user has a "Mirrored Frequency" (e.g. Total Name - 9 loop = Master Number), they have a hidden potential.
4. **Life Path (AKY):** The soul's mission.
5. **Balance:** Fire (1,3,8), Water (2,6,9), Air (5), Earth (4,8), Soul (7,9).

Output Format:
Please provide a "Bölüm 22 - Master Sonuç" style report.
- **Kimlik Sentezi:** Summary of character based on Name + Life Path.
- **Enerji Analizi:** Comment on their Element balance and Chakra blockages (Missing numbers).
- **Karmik Dersler:** specifically addressing Missing Numbers.
- **Gelecek ve Potansiyel:** Based on the Life Path.
- **Öneri:** One specific action item to balance their energy.

Tone: Mystical, Professional, Empowering, Direct. Use Turkish language.
`.trim();
