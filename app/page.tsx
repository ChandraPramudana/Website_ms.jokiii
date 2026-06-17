import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Keunggulan from "@/components/Keunggulan";
import SpssPricing from "@/components/SpssPricing";
import Pricelist from "@/components/Pricelist";
import AlurPemesanan from "@/components/AlurPemesanan";
import Testimoni from "@/components/Testimoni";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Keunggulan />
        <SpssPricing />
        <Pricelist />
        <AlurPemesanan />
        <Testimoni />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
