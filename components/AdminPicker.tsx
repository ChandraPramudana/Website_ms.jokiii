"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { WA_ADMINS } from "@/lib/constants";

type AdminPickerContextValue = {
  openPicker: () => void;
};

const AdminPickerContext = createContext<AdminPickerContextValue>({
  openPicker: () => {},
});

export const useAdminPicker = () => useContext(AdminPickerContext);

export default function AdminPickerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openPicker = useCallback(() => setOpen(true), []);
  const closePicker = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openPicker }), [openPicker]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AdminPickerContext.Provider value={value}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-700/50 px-5 backdrop-blur-sm"
            onClick={closePicker}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Pilih admin WhatsApp"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-4xl bg-white p-6 shadow-soft-lg"
            >
              <button
                type="button"
                aria-label="Tutup"
                onClick={closePicker}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition-colors hover:bg-sky-200"
              >
                <X size={18} />
              </button>

              <h3 className="pr-10 font-display text-xl font-bold text-ink-700">
                Chat dengan siapa?
              </h3>
              <p className="mt-1 font-body text-sm text-ink-500">
                Pilih salah satu admin ms.jokiii di bawah ini.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {WA_ADMINS.map((admin) => (
                  <a
                    key={admin.id}
                    href={admin.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closePicker}
                    className="flex items-center gap-3 rounded-3xl bg-sky-50 px-4 py-3.5 transition-transform hover:scale-[1.02] hover:bg-sky-100"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-soft">
                      <MessageCircle size={20} />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-display text-base font-bold text-ink-700">
                        {admin.name} ({admin.role})
                      </span>
                      <span className="font-body text-sm text-ink-500">
                        {admin.displayNumber}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AdminPickerContext.Provider>
  );
}
