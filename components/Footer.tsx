import { GraduationCap, MessageCircle, Clock } from "lucide-react";
import { WA_LINK, WA_NUMBER, OPERATIONAL_HOURS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  const displayNumber = `0${WA_NUMBER.slice(2)}`;

  return (
    <footer className="bg-ink-700 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <a href="#beranda" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-400 text-white">
              <GraduationCap size={20} strokeWidth={2.4} />
            </span>
            <span className="font-display text-xl font-bold">ms.jokiii</span>
          </a>
          <p className="max-w-xs text-center font-body text-sm text-white/60 lg:text-left">
            Teman setia urusan tugas kuliahmu. Jasa SPSS, makalah, dan PPT
            yang rapi, ramah, dan amanah.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 lg:items-start">
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-sky-300">
            Kontak
          </h4>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm text-white/80 hover:text-white"
          >
            <MessageCircle size={16} />
            {displayNumber}
          </a>
          <p className="flex items-center gap-2 font-body text-sm text-white/80">
            <Clock size={16} />
            {OPERATIONAL_HOURS}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 pt-6 text-center sm:px-8">
        <p className="font-body text-xs text-white/50">
          © {year} ms.jokiii. Semua hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
