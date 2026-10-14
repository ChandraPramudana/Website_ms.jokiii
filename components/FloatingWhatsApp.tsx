"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useAdminPicker } from "./AdminPicker";

export default function FloatingWhatsApp() {
  const { openPicker } = useAdminPicker();
  return (
    <motion.button
      type="button"
      onClick={openPicker}
      aria-label="Chat WhatsApp ms.jokiii"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 animate-bounce-soft items-center justify-center rounded-full bg-sky-500 text-white shadow-soft-lg"
    >
      <MessageCircle size={24} />
    </motion.button>
  );
}
