import type { Metadata, Viewport } from "next";
import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import MouseSparkle from "@/components/MouseSparkle";
import BackToTop from "@/components/BackToTop";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ms.jokiii | Jasa SPSS, Makalah, dan PPT",
  description:
    "Jasa akademik terpercaya. SPSS, makalah, PPT, dan berbagai kebutuhan tugas kuliah. Payment setelah selesai.",
  keywords: [
    "jasa spss",
    "jasa makalah",
    "jasa ppt",
    "joki tugas kuliah",
    "ms.jokiii",
  ],
  openGraph: {
    title: "ms.jokiii | Jasa SPSS, Makalah, dan PPT",
    description:
      "Jasa akademik terpercaya. SPSS, makalah, PPT, dan berbagai kebutuhan tugas kuliah. Payment setelah selesai.",
    type: "website",
    locale: "id_ID",
    siteName: "ms.jokiii",
  },
  twitter: {
    card: "summary_large_image",
    title: "ms.jokiii | Jasa SPSS, Makalah, dan PPT",
    description:
      "Jasa akademik terpercaya. SPSS, makalah, PPT, dan berbagai kebutuhan tugas kuliah.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7BC4EA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${baloo.variable} ${jakarta.variable} font-body antialiased`}
      >
        <LoadingScreen />
        <MouseSparkle />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
