"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_LIST } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="font-body text-sm font-bold uppercase tracking-wide text-sky-500">
            Masih Bingung?
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-700 sm:text-4xl">
            Pertanyaan Umum
          </h2>
        </ScrollReveal>

        <div className="mt-10 flex flex-col gap-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal key={item.question} delay={idx * 0.06}>
                <div className="overflow-hidden rounded-3xl bg-sky-50 shadow-card">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-bold text-ink-700">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-5 font-body text-sm text-ink-500">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
