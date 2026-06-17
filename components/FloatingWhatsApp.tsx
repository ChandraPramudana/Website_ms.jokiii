"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_LINK } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp ms.jokiii"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 animate-bounce-soft items-center justify-center rounded-full bg-sky-500 text-white shadow-soft-lg"
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
