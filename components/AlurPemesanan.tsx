"use client";

import { motion } from "framer-motion";
import { ORDER_STEPS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function AlurPemesanan() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="font-body text-sm font-bold uppercase tracking-wide text-sky-500">
            Gampang Banget
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-700 sm:text-4xl">
            Alur Pemesanan
          </h2>
          <p className="mt-3 font-body text-ink-500">
            Cuma lima langkah santai sampai tugasmu beres.
          </p>
        </ScrollReveal>

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-sky-200 sm:left-1/2 sm:block" />

          <div className="flex flex-col gap-8">
            {ORDER_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <ScrollReveal
                  key={step.number}
                  delay={idx * 0.1}
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      isEven ? "sm:text-left" : "sm:text-right"
                    }`}
                  >
                    <div className="rounded-4xl bg-sky-50 p-5 shadow-card sm:inline-block">
                      <h3 className="font-display text-lg font-bold text-ink-700">
                        {step.title}
                      </h3>
                      <p className="mt-1 font-body text-sm text-ink-500">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center self-start rounded-full bg-sky-500 font-display text-base font-bold text-white shadow-glow sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:self-auto"
                  >
                    {step.number}
                  </motion.div>

                  <div className="hidden flex-1 sm:block" />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
