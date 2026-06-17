export const BRAND_NAME = "ms.jokiii";

export const WA_NUMBER = "6289666053367";
export const WA_MESSAGE = "Halo kak, saya tertarik menggunakan jasa ms.jokiii";
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

export const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Pricelist", href: "#pricelist" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export type PriceItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  icon: "makalah" | "ppt" | "bundle";
  highlight?: boolean;
};

export const PRICE_LIST: PriceItem[] = [
  {
    id: "makalah",
    title: "Makalah",
    description:
      "Penulisan makalah sesuai kaidah akademik, rapi, terstruktur, dan bebas plagiarisme. Cocok untuk tugas sekolah maupun kuliah.",
    price: 30000,
    icon: "makalah",
  },
  {
    id: "ppt",
    title: "PPT Presentasi",
    description:
      "Slide presentasi estetik dan profesional, mudah dipahami, siap kamu pakai untuk presentasi di depan kelas.",
    price: 15000,
    icon: "ppt",
  },
  {
    id: "bundle",
    title: "Paket Makalah + PPT",
    description:
      "Hemat dan praktis! Dapatkan makalah lengkap beserta slide presentasinya dalam satu paket spesial.",
    price: 35000,
    icon: "bundle",
  },
];

export type SpssTier = {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
};

export const SPSS_TIERS: SpssTier[] = [
  {
    id: "spss-standard",
    title: "Standard",
    price: 80000,
    description: "Semua uji statistik lengkap, output SPSS siap pakai.",
    features: [
      "Semua uji statistik dasar lengkap",
      "Output SPSS rapi dan terstruktur",
      "Pengerjaan cepat",
      "Bisa request uji tambahan",
      "Payment setelah selesai",
    ],
    badge: "TERPOPULER",
  },
  {
    id: "spss-premium",
    title: "Premium",
    price: 150000,
    description: "Paket lengkap, output plus pembahasan siap masuk skripsi.",
    features: [
      "Semua uji statistik lengkap",
      "Output SPSS lengkap dan rapi",
      "Pembahasan hasil format Word",
      "Tinggal copy-paste ke skripsi",
      "Payment setelah selesai",
    ],
    badge: "PALING LENGKAP",
    highlight: true,
  },
];

export type SpssTest = {
  label: string;
  icon?:
    | "descriptive"
    | "normality"
    | "multicollinearity"
    | "autocorrelation"
    | "heteroscedasticity"
    | "regression"
    | "r2"
    | "validity"
    | "more";
  letter?: string;
};

export const SPSS_TESTS: SpssTest[] = [
  { label: "Statistik Deskriptif", icon: "descriptive" },
  { label: "Uji Normalitas", icon: "normality" },
  { label: "Multikolinieritas (VIF)", icon: "multicollinearity" },
  { label: "Autokorelasi", icon: "autocorrelation" },
  { label: "Heteroskedastisitas", icon: "heteroscedasticity" },
  { label: "Regresi Linier Berganda", icon: "regression" },
  { label: "Uji F (Simultan)", letter: "F" },
  { label: "Uji t (Parsial)", letter: "T" },
  { label: "Koefisien Determinasi R²", icon: "r2" },
  { label: "Validitas & Reliabilitas", icon: "validity" },
  { label: "Dan uji lainnya...", icon: "more" },
];

export type Advantage = {
  title: string;
  description: string;
  icon: "zap" | "wallet" | "heart" | "clock" | "sparkles";
};

export const ADVANTAGES: Advantage[] = [
  {
    title: "Fast Response",
    description: "Chat dibalas cepat, tanya-tanya pun santai tanpa di-php-in.",
    icon: "zap",
  },
  {
    title: "Payment Setelah Selesai",
    description: "Bayar setelah tugasmu kelar dan kamu sudah cek hasilnya.",
    icon: "wallet",
  },
  {
    title: "Ramah dan Amanah",
    description: "Dikerjakan dengan jujur, data dan tugasmu aman terjaga.",
    icon: "heart",
  },
  {
    title: "Pengerjaan Cepat",
    description: "Estimasi waktu jelas, nggak bikin kamu kejar deadline.",
    icon: "clock",
  },
  {
    title: "Rapi dan Berkualitas",
    description: "Hasil akhir terstruktur, sesuai format, dan siap dikumpulkan.",
    icon: "sparkles",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const ORDER_STEPS: Step[] = [
  {
    number: "01",
    title: "Hubungi WhatsApp",
    description: "Klik tombol WhatsApp dan sapa kakak admin ms.jokiii.",
  },
  {
    number: "02",
    title: "Kirim Detail Tugas",
    description: "Ceritakan kebutuhanmu: jenis tugas, mata kuliah, dan deadline.",
  },
  {
    number: "03",
    title: "Estimasi Pengerjaan",
    description: "Kamu akan dapat info harga dan estimasi waktu pengerjaan.",
  },
  {
    number: "04",
    title: "Tugas Selesai",
    description: "Hasil dikerjakan rapi lalu dikirim untuk kamu cek dahulu.",
  },
  {
    number: "05",
    title: "Payment",
    description: "Kalau sudah cocok dan puas, baru lakukan pembayaran.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  message: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Salsabila",
    role: "Mahasiswa Manajemen",
    message:
      "Olah data SPSS-nya rapi banget dan dijelasin sampai aku paham. Makasih ms.jokiii!",
    rating: 5,
  },
  {
    name: "Rafi Ardiansyah",
    role: "Mahasiswa Akuntansi",
    message:
      "Makalahnya sesuai format kampus, dikirim lebih cepat dari estimasi. Recommended!",
    rating: 5,
  },
  {
    name: "Putri Wulandari",
    role: "Mahasiswa Psikologi",
    message:
      "PPT-nya cantik dan gampang dipahami waktu presentasi. Dosen pun puas lihatnya.",
    rating: 5,
  },
  {
    name: "Dimas Pratama",
    role: "Mahasiswa Teknik Informatika",
    message:
      "Suka banget bisa bayar setelah tugas jadi, jadi nggak takut tertipu. Pelayanannya ramah pula.",
    rating: 5,
  },
  {
    name: "Nadia Oktaviani",
    role: "Mahasiswa Kesehatan Masyarakat",
    message:
      "Paket makalah + PPT-nya hemat waktu dan biaya. Hasilnya pun nyambung satu sama lain.",
    rating: 5,
  },
  {
    name: "Bagas Setiawan",
    role: "Mahasiswa Ekonomi",
    message:
      "Responnya cepat walau aku chat malam-malam. Hasil SPSS-nya juga akurat dan jelas.",
    rating: 5,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_LIST: FaqItem[] = [
  {
    question: "Apakah bisa bayar setelah selesai?",
    answer:
      "Bisa banget! Kamu hanya perlu membayar setelah tugasmu selesai dikerjakan dan sudah kamu periksa hasilnya.",
  },
  {
    question: "Berapa lama pengerjaan?",
    answer:
      "Estimasi waktu pengerjaan tergantung jenis dan tingkat kesulitan tugas, biasanya akan diinfokan langsung saat konsultasi di WhatsApp.",
  },
  {
    question: "Apakah revisi tersedia?",
    answer:
      "Tersedia. Kami menyediakan revisi agar hasil akhir sesuai dengan kebutuhan dan ketentuan tugasmu.",
  },
  {
    question: "Apakah aman?",
    answer:
      "Aman. Data dan tugasmu kami jaga kerahasiaannya, dan proses pengerjaan dilakukan dengan jujur dan amanah.",
  },
  {
    question: "Bagaimana cara order?",
    answer:
      "Cukup klik tombol WhatsApp di website ini, sampaikan detail tugasmu, lalu tunggu estimasi dari admin ms.jokiii.",
  },
];

export const OPERATIONAL_HOURS = "Setiap Hari, 08.00 - 22.00 WIB";
