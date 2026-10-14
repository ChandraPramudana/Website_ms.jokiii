"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, GraduationCap } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useAdminPicker } from "./AdminPicker";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openPicker } = useAdminPicker();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#beranda" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400 text-white shadow-soft">
            <GraduationCap size={20} strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl font-bold text-ink-700">
            ms.jokiii
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-semibold text-ink-600 transition-colors hover:text-sky-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openPicker}
            className="hidden items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 font-body text-sm font-bold text-white shadow-soft transition-transform hover:scale-105 hover:bg-sky-600 sm:flex"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
          <button
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 font-body text-sm font-semibold text-ink-600 hover:bg-sky-50 hover:text-sky-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openPicker();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 font-body text-sm font-bold text-white shadow-soft"
                >
                  <MessageCircle size={18} />
                  Chat WhatsApp
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
