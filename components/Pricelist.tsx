"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Presentation,
  PackageCheck,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { PRICE_LIST } from "@/lib/constants";
import { useAdminPicker } from "./AdminPicker";
import ScrollReveal from "./ScrollReveal";

const ICON_MAP: Record<string, LucideIcon> = {
  makalah: FileText,
  ppt: Presentation,
  bundle: PackageCheck,
};

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function Pricelist() {
  const { openPicker } = useAdminPicker();
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="font-body text-sm font-bold uppercase tracking-wide text-sky-500">
            Layanan Lainnya
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-700 sm:text-4xl">
            Makalah, PPT, dan Paket Hemat
          </h2>
          <p className="mt-3 font-body text-ink-500">
            Harga jelas, transparan, tanpa biaya tersembunyi. Pilih sesuai
            kebutuhan tugasmu.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {PRICE_LIST.map((item, idx) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <ScrollReveal key={item.id} delay={idx * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className={`relative flex h-full flex-col rounded-4xl p-6 shadow-card ${
                    item.highlight
                      ? "bg-gradient-to-br from-sky-400 to-sky-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {item.badge && (
                    <motion.span
                      animate={{ rotate: [-4, 4, -4] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-3 -top-3 rounded-full bg-sunny-400 px-3 py-1 font-body text-xs font-extrabold text-ink-700 shadow-soft"
                    >
                      {item.badge}
                    </motion.span>
                  )}

                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      item.highlight
                        ? "bg-white/20 text-white"
                        : "bg-sky-100 text-sky-600"
                    }`}
                  >
                    <Icon size={24} strokeWidth={2.2} />
                  </span>

                  <h3 className="mt-4 font-display text-lg font-bold">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 flex-1 font-body text-sm ${
                      item.highlight ? "text-white/85" : "text-ink-500"
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="mt-5">
                    {item.oldPrice && (
                      <span
                        className={`mr-2 font-body text-sm line-through ${
                          item.highlight ? "text-white/60" : "text-ink-500/60"
                        }`}
                      >
                        {formatRupiah(item.oldPrice)}
                      </span>
                    )}
                    <div
                      className={`font-display text-2xl font-extrabold ${
                        item.highlight ? "text-white" : "text-sky-600"
                      }`}
                    >
                      {formatRupiah(item.price)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={openPicker}
                    className={`mt-5 flex items-center justify-center gap-2 rounded-full px-5 py-3 font-body text-sm font-bold transition-transform hover:scale-105 ${
                      item.highlight
                        ? "bg-white text-sky-600 hover:bg-sunny-100"
                        : "bg-sky-500 text-white hover:bg-sky-600"
                    }`}
                  >
                    <MessageCircle size={16} />
                    Pesan Sekarang
                  </button>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
