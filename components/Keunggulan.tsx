"use client";

import { motion } from "framer-motion";
import { Zap, Wallet, Heart, Clock, Sparkles, type LucideIcon } from "lucide-react";
import { ADVANTAGES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

const ICON_MAP: Record<string, LucideIcon> = {
  zap: Zap,
  wallet: Wallet,
  heart: Heart,
  clock: Clock,
  sparkles: Sparkles,
};

export default function Keunggulan() {
  return (
    <section id="layanan" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="font-body text-sm font-bold uppercase tracking-wide text-sky-500">
            Kenapa Pilih Kami
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-700 sm:text-4xl">
            Belajar Tenang, Tugas Aman
          </h2>
          <p className="mt-3 font-body text-ink-500">
            Bukan cuma cepat, tapi juga ramah dan bisa dipercaya untuk
            nemenin urusan akademikmu.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ADVANTAGES.map((item, idx) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <ScrollReveal key={item.title} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group flex h-full flex-col items-center rounded-4xl bg-card-gradient p-6 text-center shadow-card transition-shadow hover:shadow-glow"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-ink-500">
                    {item.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
