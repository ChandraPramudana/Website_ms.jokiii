"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Link2,
  RefreshCw,
  Triangle,
  TrendingUp,
  PieChart,
  CheckCheck,
  Sparkles,
  MessageCircle,
  Check,
  Crown,
  type LucideIcon,
} from "lucide-react";
import { SPSS_TIERS, SPSS_TESTS, WA_LINK } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

const TEST_ICON_MAP: Record<string, LucideIcon> = {
  descriptive: BarChart3,
  normality: Bell,
  multicollinearity: Link2,
  autocorrelation: RefreshCw,
  heteroscedasticity: Triangle,
  regression: TrendingUp,
  r2: PieChart,
  validity: CheckCheck,
  more: Sparkles,
};

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function SpssPricing() {
  return (
    <section
      id="pricelist"
      className="relative overflow-hidden bg-sky-50 py-20 sm:py-28"
    >
      <div className="absolute -top-10 right-0 h-64 w-64 rounded-full bg-sunny-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="font-body text-sm font-bold uppercase tracking-wide text-sky-500">
            Daftar Harga
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-700 sm:text-4xl">
            Jasa SPSS
          </h2>
          <p className="mt-3 font-body text-ink-500">
            Olah data penelitianmu sampai tuntas. Pilih paket yang paling
            sesuai sama kebutuhan skripsi atau tugasmu.
          </p>
        </ScrollReveal>

        {/* dua tier pricing: Standard & Premium */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {SPSS_TIERS.map((tier, idx) => (
            <ScrollReveal key={tier.id} delay={idx * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`relative flex h-full flex-col rounded-4xl p-7 shadow-card ${
                  tier.highlight
                    ? "bg-gradient-to-br from-sky-400 to-sky-600 text-white"
                    : "bg-white"
                }`}
              >
                {tier.badge && (
                  <span
                    className={`absolute -right-3 -top-3 rounded-full px-3 py-1 font-body text-xs font-extrabold shadow-soft ${
                      tier.highlight
                        ? "bg-sunny-400 text-ink-700"
                        : "bg-sky-500 text-white"
                    }`}
                  >
                    {tier.badge}
                  </span>
                )}

                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    tier.highlight
                      ? "bg-white/20 text-white"
                      : "bg-sky-100 text-sky-600"
                  }`}
                >
                  {tier.highlight ? (
                    <Crown size={24} strokeWidth={2.2} />
                  ) : (
                    <BarChart3 size={24} strokeWidth={2.2} />
                  )}
                </span>

                <h3 className="mt-4 font-display text-xl font-bold">
                  {tier.title}
                </h3>
                <p
                  className={`mt-1 font-body text-sm ${
                    tier.highlight ? "text-white/85" : "text-ink-500"
                  }`}
                >
                  {tier.description}
                </p>

                <div
                  className={`mt-4 font-display text-3xl font-extrabold ${
                    tier.highlight ? "text-white" : "text-sky-600"
                  }`}
                >
                  {formatRupiah(tier.price)}
                </div>

                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 font-body text-sm"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          tier.highlight
                            ? "bg-white/20 text-white"
                            : "bg-sky-100 text-sky-600"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span
                        className={
                          tier.highlight ? "text-white/90" : "text-ink-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-3 font-body text-sm font-bold transition-transform hover:scale-105 ${
                    tier.highlight
                      ? "bg-white text-sky-600 hover:bg-sunny-100"
                      : "bg-sky-500 text-white hover:bg-sky-600"
                  }`}
                >
                  <MessageCircle size={16} />
                  Pilih {tier.title}
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* daftar uji statistik yang dikerjakan */}
        <ScrollReveal delay={0.1} className="mt-14">
          <div className="rounded-4xl bg-white p-6 shadow-card sm:p-8">
            <p className="text-center font-body text-sm text-ink-500">
              Nggak nemu jenis uji yang kamu butuhkan? Tenang, kamu bisa{" "}
              <span className="font-bold text-sky-600">
                request uji apapun
              </span>{" "}
              sesuai kebutuhan skripsi atau penelitianmu. Kami fleksibel!
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {SPSS_TESTS.map((test) => {
                const Icon = test.icon ? TEST_ICON_MAP[test.icon] : null;
                return (
                  <div
                    key={test.label}
                    className="flex flex-col items-center gap-2 rounded-3xl bg-sky-50 px-4 py-5 text-center"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600 shadow-soft">
                      {test.letter ? (
                        <span className="font-display text-base font-extrabold">
                          {test.letter}
                        </span>
                      ) : Icon ? (
                        <Icon size={20} strokeWidth={2.2} />
                      ) : null}
                    </span>
                    <span className="font-body text-xs font-semibold leading-snug text-ink-600">
                      {test.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
