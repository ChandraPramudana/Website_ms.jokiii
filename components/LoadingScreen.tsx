"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-hero-gradient"
        >
          <motion.span
            animate={{ rotate: [0, -8, 8, -8, 0], y: [0, -10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-400 text-white shadow-glow"
          >
            <GraduationCap size={38} strokeWidth={2.2} />
          </motion.span>
          <p className="font-display text-lg font-bold text-ink-700">
            ms.jokiii
          </p>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="h-2.5 w-2.5 rounded-full bg-sky-400"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
