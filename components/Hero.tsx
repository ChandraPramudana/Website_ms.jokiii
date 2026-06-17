"use client";

import { motion } from "framer-motion";
import { MessageCircle, Tag } from "lucide-react";
import { WA_LINK } from "@/lib/constants";
import Mascot from "./Mascot";
import FloatingIcons from "./FloatingIcons";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <FloatingIcons />

      {/* decorative blobs */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sunny-200/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-wide text-sky-600 shadow-soft">
            <Tag size={14} />
            Jasa Akademik Terpercaya
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink-700 sm:text-5xl lg:text-[3.4rem]">
            Tugas Beres,{" "}
            <span className="text-sky-500">Waktu Lebih Hemat</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md font-body text-base text-ink-500 sm:text-lg lg:mx-0">
            Jasa SPSS, Makalah, PPT, dan kebutuhan akademik lainnya. Dikerjakan
            rapi, ramah, dan amanah, biar kuliahmu lebih santai.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 font-body text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-sky-600 sm:w-auto"
            >
              <MessageCircle size={18} />
              Konsultasi Sekarang
            </a>
            <a
              href="#pricelist"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-sky-300 bg-white/70 px-7 py-3.5 font-body text-sm font-bold text-sky-700 transition-transform hover:-translate-y-0.5 hover:bg-white sm:w-auto"
            >
              Lihat Pricelist
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-1 justify-center"
        >
          <div className="relative w-64 sm:w-80 lg:w-[22rem]">
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full border-4 border-dashed border-sky-200/70" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Mascot className="w-full drop-shadow-[0_25px_35px_rgba(82,169,218,0.35)]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
