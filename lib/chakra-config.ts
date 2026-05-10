export const chakraColors = {
  root: "#8B0000",
  sacral: "#D2691E",
  solar: "#DAA520",
  heart: "#2E8B57",
  throat: "#4682B4",
  thirdEye: "#483D8B",
  crown: "#7B68EE",
} as const;

export const quizQuestions = [
  {
    id: 1,
    question: "Şu an hayatında en çok neye ihtiyaç duyuyorsun?",
    options: [
      { text: "Güven", chakra: "root" },
      { text: "Yaratıcılık", chakra: "sacral" },
      { text: "Güç", chakra: "solar" },
      { text: "Sevgi", chakra: "heart" },
      { text: "İfade", chakra: "throat" },
      { text: "Sezgi", chakra: "thirdEye" },
      { text: "Bağlantı", chakra: "crown" },
    ],
  },
  {
    id: 2,
    question: "Sabah uyandığında ilk hissin ne oluyor?",
    options: [
      { text: "Tedirginlik", chakra: "root" },
      { text: "Hayal kırıklığı", chakra: "sacral" },
      { text: "Kararsızlık", chakra: "solar" },
      { text: "Yalnızlık", chakra: "heart" },
      { text: "Sessizlik", chakra: "throat" },
      { text: "Bulanıklık", chakra: "thirdEye" },
      { text: "Kopukluk", chakra: "crown" },
    ],
  },
  {
    id: 3,
    question: "Hangi renk seni daha çok çekiyor?",
    options: [
      { text: "Kırmızı", chakra: "root" },
      { text: "Turuncu", chakra: "sacral" },
      { text: "Sarı", chakra: "solar" },
      { text: "Yeşil", chakra: "heart" },
      { text: "Mavi", chakra: "throat" },
      { text: "Lacivert", chakra: "thirdEye" },
      { text: "Mor", chakra: "crown" },
    ],
  },
  {
    id: 4,
    question: "Bedeninde en çok gerginlik hissettiğin yer?",
    options: [
      { text: "Ayaklar ve bacaklar", chakra: "root" },
      { text: "Karın altı", chakra: "sacral" },
      { text: "Mide", chakra: "solar" },
      { text: "Göğüs", chakra: "heart" },
      { text: "Boğaz", chakra: "throat" },
      { text: "Alın", chakra: "thirdEye" },
      { text: "Başın tepesi", chakra: "crown" },
    ],
  },
  {
    id: 5,
    question: "Sana en yakın element hangisi?",
    options: [
      { text: "Toprak", chakra: "root" },
      { text: "Su", chakra: "sacral" },
      { text: "Ateş", chakra: "solar" },
      { text: "Hava", chakra: "heart" },
      { text: "Ses", chakra: "throat" },
      { text: "Işık", chakra: "thirdEye" },
      { text: "Boşluk", chakra: "crown" },
    ],
  },
];

export const chakraToProduct: Record<string, string> = {
  root: "koklenme-yagi",
  sacral: "akis-yagi",
  solar: "guc-yagi",
  heart: "kalp-acilim-yagi",
  throat: "ifade-yagi",
  thirdEye: "sezgi-yagi",
  crown: "yuksek-bilinc-yagi",
};
