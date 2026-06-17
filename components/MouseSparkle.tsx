"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#7BC4EA", "#FFD45C", "#A4D9F3", "#FFFFFF"];

export default function MouseSparkle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawn.current < 70) return;
      lastSpawn.current = now;

      const container = containerRef.current;
      if (!container) return;

      const sparkle = document.createElement("span");
      const size = 6 + Math.random() * 5;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      sparkle.style.position = "fixed";
      sparkle.style.left = `${e.clientX - size / 2}px`;
      sparkle.style.top = `${e.clientY - size / 2}px`;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.borderRadius = "50%";
      sparkle.style.background = color;
      sparkle.style.pointerEvents = "none";
      sparkle.style.zIndex = "9999";
      sparkle.style.animation = "sparkle 0.6s ease-out forwards";

      container.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 650);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={containerRef} aria-hidden="true" />;
}
