"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Testimoni() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimoni"
      className="relative overflow-hidden bg-hero-gradient py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <span className="font-body text-sm font-bold uppercase tracking-wide text-sky-500">
            Kata Mereka
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink-700 sm:text-4xl">
            Testimoni Pelanggan
          </h2>
          <p className="mt-3 font-body text-ink-500">
            Cerita dari teman-teman yang sudah dibantu ms.jokiii.
          </p>
        </ScrollReveal>
      </div>

      <div className="group relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-sky-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-sky-100 to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee gap-6 px-5 group-hover:[animation-play-state:paused] sm:px-8">
          {loop.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className="w-72 flex-shrink-0 rounded-4xl border border-white/60 bg-white/50 p-6 shadow-card backdrop-blur-md sm:w-80"
            >
              <Quote className="text-sky-400" size={26} />
              <p className="mt-3 font-body text-sm text-ink-600">
                {t.message}
              </p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="fill-sunny-400 text-sunny-400"
                  />
                ))}
              </div>
              <div className="mt-3 border-t border-sky-100 pt-3">
                <p className="font-display text-sm font-bold text-ink-700">
                  {t.name}
                </p>
                <p className="font-body text-xs text-ink-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
