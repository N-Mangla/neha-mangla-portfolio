import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        muted: "#5f6b7a",
        line: "#dbe3ee",
        porcelain: "#f6f8fb",
        ocean: {
          50: "#eef7ff",
          100: "#d9edff",
          500: "#2f80ed",
          600: "#1f6fd0",
          700: "#175ab1"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
        card: "0 12px 32px rgba(15, 23, 42, 0.06)"
      },
      borderRadius: {
        xxl: "2rem"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(15,23,42,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

export default config;
