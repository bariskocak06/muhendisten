export interface Product {
  slug: string;
  name: string;
  chakra: string;
  chakraColor: string;
  theme: string;
  description: string;
  ingredients: string[];
  stone: string;
  intention: string;
  usage: string;
  price: number;
  premiumPrice?: number;
  shopifyLink: string;
  isSignature?: boolean;
}

export const products: Product[] = [
  {
    slug: "koklenme-yagi",
    name: "Köklenme Yağı",
    chakra: "Kök Çakra",
    chakraColor: "#8B0000",
    theme:
      "Topraklanma ve güven enerjisini günlük ritüeline eklemek isteyenler için kişisel bir niyet yağı.",
    description:
      "Paçuli, sedir ağacı ve vetiver notalarıyla hazırlanmış; güven, topraklanma ve bedenle bağ temasına odaklanan niyet yağıdır.",
    ingredients: ["Paçuli", "Sedir Ağacı", "Vetiver", "Zencefil"],
    stone: "Kırmızı Jasper",
    intention: "Ayaklarım yere basıyor, köklerim beni taşıyor.",
    usage:
      "Sabah veya akşam ayak bileklerine ve el bileklerine 2-3 damla sürülür. Niyet kartı okunarak ritüel tamamlanır.",
    price: 500,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/koklenme-yagi",
  },
  {
    slug: "akis-yagi",
    name: "Akış Yağı",
    chakra: "Sakral Çakra",
    chakraColor: "#D2691E",
    theme:
      "Yaratıcılık ve duygusal akış için — kendine veya özel birine anlamlı, enerjisi düşünülmüş bir hediye.",
    description:
      "Ylang ylang, portakal ve sandal ağacı ile harmanlanmış; yaratıcılık, duygu ve haz temasına odaklanan niyet yağıdır.",
    ingredients: ["Ylang Ylang", "Portakal", "Sandal Ağacı", "Yasemin"],
    stone: "Karneol",
    intention: "Yaratıcılığım özgürce akıyor, duygularımı kucaklıyorum.",
    usage:
      "Karın altı bölgesine ve el bileklerine 2-3 damla sürülür. Derin nefes alarak niyet cümlesi tekrarlanır.",
    price: 500,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/akis-yagi",
  },
  {
    slug: "guc-yagi",
    name: "Güç Yağı",
    chakra: "Solar Pleksus",
    chakraColor: "#DAA520",
    theme:
      "İç gücünü ve iradeni hatırlamak isteyenler için özenle harmanlanmış butik formül.",
    description:
      "Limon, bergamot ve biberiye ile hazırlanmış; özgüven, irade ve içsel güç temasına odaklanan niyet yağıdır.",
    ingredients: ["Limon", "Bergamot", "Biberiye", "Zencefil"],
    stone: "Kaplan Gözü",
    intention: "Gücüm bende, iradem sarsılmaz.",
    usage:
      "Göbek üstü bölgeye ve el bileklerine 2-3 damla sürülür. Ayakta durarak niyet cümlesi güçlü bir sesle söylenir.",
    price: 500,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/guc-yagi",
  },
  {
    slug: "kalp-acilim-yagi",
    name: "Kalp Açılım Yağı",
    chakra: "Kalp Çakrası",
    chakraColor: "#2E8B57",
    theme:
      "Kalp alanında yumuşama ve bağ kurma niyeti taşıyanlar için; sevgiyi hatırlatan bir ritüel eşlikçisi.",
    description:
      "Gül, lavanta ve sardunya ile harmanlanmış; sevgi, şefkat ve bağ temasına odaklanan niyet yağıdır.",
    ingredients: ["Gül", "Lavanta", "Sardunya", "Palmarosa"],
    stone: "Yeşil Aventurin",
    intention: "Kalbim açık, sevgiyi veriyorum ve alıyorum.",
    usage:
      "Göğüs bölgesine ve el bileklerine 2-3 damla sürülür. Ellerinizi kalbin üzerine koyarak niyet cümlesini fısıldayın.",
    price: 500,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/kalp-acilim-yagi",
  },
  {
    slug: "ifade-yagi",
    name: "İfade Yağı",
    chakra: "Boğaz Çakrası",
    chakraColor: "#4682B4",
    theme:
      "Sesini netleştirmek ve iletişimde daha oturmak isteyenler için günlük ifade ritüeline uygun.",
    description:
      "Nane, okaliptüs ve adaçayı ile hazırlanmış; ifade, iletişim ve gerçeği söyleme temasına odaklanan niyet yağıdır.",
    ingredients: ["Nane", "Okaliptüs", "Adaçayı", "Papatya"],
    stone: "Akuamarin",
    intention: "Sesim güçlü, sözlerim net, gerçeğimi ifade ediyorum.",
    usage:
      "Boğaz bölgesine ve el bileklerine 2-3 damla sürülür. Birkaç derin nefes alarak sesinizi özgürce bırakın.",
    price: 500,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/ifade-yagi",
  },
  {
    slug: "sezgi-yagi",
    name: "Sezgi Yağı",
    chakra: "Üçüncü Göz",
    chakraColor: "#483D8B",
    theme:
      "Sezgine kulak vermek ve odaklanmak isteyenler için sessiz anlara eşlik eden bir karışım.",
    description:
      "Lavanta, günlük ve sandal ağacı ile harmanlanmış; sezgi, odak ve içgörü temasına odaklanan niyet yağıdır.",
    ingredients: ["Lavanta", "Günlük", "Sandal Ağacı", "Ardıç"],
    stone: "Ametist",
    intention: "İç sesimi duyuyorum, sezgilerime güveniyorum.",
    usage:
      "Alın ortasına ve şakaklara 1-2 damla sürülür. Gözlerinizi kapatarak birkaç dakika sessizce oturun.",
    price: 500,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/sezgi-yagi",
  },
  {
    slug: "yuksek-bilinc-yagi",
    name: "Yüksek Bilinç Yağı",
    chakra: "Taç Çakra",
    chakraColor: "#7B68EE",
    theme:
      "Ruhsal bağ ve dinginlik ritüeli arayanlar için meditasyon veya gece öncesi yumuşak bir kapanış.",
    description:
      "Günlük, mür ve lotus ile hazırlanmış; ruhsallık ve evrensel bağlantı temasına odaklanan niyet yağıdır.",
    ingredients: ["Günlük", "Mür", "Lotus", "Lavanta"],
    stone: "Şeffaf Kuvars",
    intention: "Evrene bağlıyım, yolum aydınlık.",
    usage:
      "Başın tepesine ve el bileklerine 1-2 damla sürülür. Meditasyon pozisyonunda niyet cümlesini içinizden tekrarlayın.",
    price: 500,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/yuksek-bilinc-yagi",
  },
  {
    slug: "derin-dalis",
    name: "Derin Dalış",
    chakra: "Signature Blend",
    chakraColor: "#483D8B",
    theme: "Derin Uyku, Dinlenme, Zihinsel Arınma",
    description:
      "Lavanta, sedir ağacı, vetiver ve papatya ile harmanlanmış; derin uyku, dinlenme ve zihinsel arınma temasına odaklanan signature blend yağıdır.",
    ingredients: [
      "Lavanta",
      "Sedir Ağacı",
      "Vetiver",
      "Papatya",
      "Tatlı Badem Taşıyıcı",
    ],
    stone: "Ametist",
    intention:
      "Bu gece zihnini bırak, bedenin dinlensin, rüyaların seni yenilesin.",
    usage:
      "Yatmadan önce el bileklerine, şakaklara ve yastığa 2-3 damla sürülür. Derin nefes alarak günü bırakın.",
    price: 500,
    premiumPrice: 650,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/derin-dalis",
    isSignature: true,
  },
  {
    slug: "altin-kapi",
    name: "Altın Kapı",
    chakra: "Signature Blend",
    chakraColor: "#DAA520",
    theme: "Bolluk, Bereket, Finansal Akış",
    description:
      "Bergamot, tarçın kabuğu, zencefil ve akgünlük ile harmanlanmış; bolluk, bereket ve finansal akış temasına odaklanan signature blend yağıdır.",
    ingredients: [
      "Bergamot",
      "Tarçın Kabuğu",
      "Zencefil",
      "Akgünlük",
      "Jojoba Taşıyıcı",
    ],
    stone: "Sitrin",
    intention:
      "Bolluk benim doğal halim. Bugün hayatıma akan her şeyi kabul ediyorum.",
    usage:
      "Sabah el bileklerine ve göğüse 2-3 damla sürülür. Niyet kartınızı okuyarak güne başlayın.",
    price: 500,
    premiumPrice: 650,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/altin-kapi",
    isSignature: true,
  },
  {
    slug: "7li-cakra-seti",
    name: "7'li Çakra Seti",
    chakra: "Tüm Çakralar",
    chakraColor: "#C9A84C",
    theme: "Tam Denge, Bütünsel Dönüşüm",
    description:
      "7 adet 5ml roll-on, her çakra için bir yağ. 7 mini niyet kartı, 7 mini doğal taş ve özel kutu ile birlikte.",
    ingredients: [
      "7 Çakra Yağı",
      "7 Niyet Kartı",
      "7 Doğal Taş",
      "Özel Kutu",
    ],
    stone: "7 Doğal Taş Seti",
    intention: "Tüm çakralarım uyum içinde, enerjim dengede.",
    usage:
      "Her gün farklı bir çakra yağı ile ritüelinizi tamamlayın. Niyet kartlarını takip ederek 7 günlük dönüşüm yolculuğuna çıkın.",
    price: 2499,
    shopifyLink: "https://SHOPIFY_DOMAIN/products/7li-cakra-seti",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getChakraProducts(): Product[] {
  return products.filter((p) => !p.isSignature && p.slug !== "7li-cakra-seti");
}
