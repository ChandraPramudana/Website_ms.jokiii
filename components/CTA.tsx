"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/constants";
import Mascot from "./Mascot";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-cta-gradient bg-[length:200%_200%] py-20 animate-gradient-move sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 text-center sm:px-8 lg:flex-row lg:text-left">
        <ScrollReveal className="flex-1">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Siap menyelesaikan tugasmu?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-white/85 lg:mx-0">
            Chat sekarang, ceritakan kebutuhan tugasmu, dan biar ms.jokiii
            yang bantu beresin.
          </p>

          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-sunny-400 px-8 py-4 font-display text-base font-bold text-ink-700 shadow-soft-lg"
          >
            <MessageCircle size={22} />
            Chat WhatsApp Sekarang
          </motion.a>
        </ScrollReveal>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden w-48 flex-shrink-0 sm:block lg:w-56"
        >
          <Mascot className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
