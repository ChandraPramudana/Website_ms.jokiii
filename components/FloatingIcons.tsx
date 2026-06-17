"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { BookOpen, Laptop, BarChart3, GraduationCap, type LucideIcon } from "lucide-react";
import { useRef } from "react";

type IconConfig = {
  Icon: LucideIcon;
  className: string;
  color: string;
  size: number;
  floatClass: string;
  speed: number;
};

const ICONS: IconConfig[] = [
  {
    Icon: BookOpen,
    className: "top-[8%] left-[4%] sm:left-[8%]",
    color: "text-sky-600 bg-white",
    size: 26,
    floatClass: "animate-float",
    speed: -60,
  },
  {
    Icon: Laptop,
    className: "top-[18%] right-[2%] sm:right-[6%]",
    color: "text-sky-700 bg-sunny-200",
    size: 28,
    floatClass: "animate-float-slow",
    speed: 40,
  },
  {
    Icon: BarChart3,
    className: "bottom-[22%] left-[0%] sm:left-[4%]",
    color: "text-sky-700 bg-white",
    size: 26,
    floatClass: "animate-bounce-soft",
    speed: 30,
  },
  {
    Icon: GraduationCap,
    className: "bottom-[8%] right-[4%] sm:right-[10%]",
    color: "text-sky-600 bg-sunny-200",
    size: 30,
    floatClass: "animate-float",
    speed: -40,
  },
];

function FloatingIcon({
  config,
  progress,
}: {
  config: IconConfig;
  progress: MotionValue<number>;
}) {
  const { Icon, className, color, size, floatClass, speed } = config;
  const y = useTransform(progress, [0, 1], [0, speed]);

  return (
    <motion.div
      style={{ y }}
      className={`absolute ${className} ${floatClass} hidden sm:flex items-center justify-center rounded-2xl ${color} p-3 shadow-soft`}
    >
      <Icon size={size} strokeWidth={2.2} />
    </motion.div>
  );
}

export default function FloatingIcons() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      {ICONS.map((config, idx) => (
        <FloatingIcon key={idx} config={config} progress={scrollYProgress} />
      ))}
    </div>
  );
}
