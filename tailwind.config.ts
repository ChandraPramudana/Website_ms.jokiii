import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#F4FAFE",
          100: "#E6F4FC",
          150: "#D7EEFA",
          200: "#C3E7F8",
          300: "#A4D9F3",
          400: "#7BC4EA",
          500: "#52A9DA",
          600: "#3A8BC0",
          700: "#2D6E9C",
          800: "#234F70",
          900: "#1A3A53",
        },
        sunny: {
          100: "#FFF8E1",
          200: "#FFEFB8",
          300: "#FFE38A",
          400: "#FFD45C",
          500: "#FFC233",
        },
        ink: {
          500: "#5C7184",
          600: "#3F5266",
          700: "#2B3A4A",
        },
      },
      fontFamily: {
        display: ["var(--font-baloo)", "ui-rounded", "sans-serif"],
        body: ["var(--font-jakarta)", "ui-sans-serif", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
        blob: "42% 58% 64% 36% / 45% 45% 55% 55%",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(82, 169, 218, 0.25)",
        "soft-lg": "0 25px 60px -15px rgba(82, 169, 218, 0.35)",
        glow: "0 0 0 4px rgba(123, 196, 234, 0.25), 0 12px 30px -8px rgba(82, 169, 218, 0.45)",
        card: "0 8px 30px rgba(43, 58, 74, 0.06)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% 20%, #F4FAFE 0%, #E6F4FC 35%, #C3E7F8 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #52A9DA 0%, #3A8BC0 50%, #2D6E9C 100%)",
        "card-gradient": "linear-gradient(160deg, #FFFFFF 0%, #F4FAFE 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(3deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(-3deg)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "gradient-move": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        sparkle: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(1.4) rotate(90deg)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "bounce-soft": "bounce-soft 2.4s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        "gradient-move": "gradient-move 8s ease infinite",
        wiggle: "wiggle 1.8s ease-in-out infinite",
        sparkle: "sparkle 0.6s ease-out forwards",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
