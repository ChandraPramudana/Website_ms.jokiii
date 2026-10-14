import type { Metadata, Viewport } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import MouseSparkle from "@/components/MouseSparkle";
import BackToTop from "@/components/BackToTop";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="font-body antialiased">
        <LoadingScreen />
        <MouseSparkle />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}