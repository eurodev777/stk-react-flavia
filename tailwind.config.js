/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // =========================
        // PRIMARY BRAND COLORS
        // =========================
        coral: {
          50: "#f8f5fc",
          100: "#f1ebf8",
          200: "#e6dcf3",
          300: "#d8caec",
          400: "#c9b7e6",
          500: "#beace3", // principal
          600: "#ab93d8",
          700: "#9778cc",
          800: "#7f5eb3",
          900: "#684996",
          950: "#43305f",
        },

        // =========================
        // SOFT BACKGROUNDS
        // =========================
        cream: "#fcfafc",

        peach: {
          50: "#faf7fd",
          100: "#f5f0fb",
          200: "#ede4f8",
        },

        // =========================
        // CHARCOAL TEXT COLORS
        // =========================
        charcoal: {
          50: "#f6f6f7",
          100: "#e1e1e6",
          200: "#c4c4cc",
          300: "#a1a1aa",
          400: "#71717a",
          500: "#52525b",
          600: "#3f3f46",
          700: "#27272a",
          750: "#222226",
          800: "#18181b",
          850: "#141417",
          900: "#09090b",
        },

        // =========================
        // EXTRA COLORS
        // =========================
        slate: {
          100: "#f1f5f9",
          150: "#e9eef5",
          200: "#e2e8f0",
        },

        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
        },

        white: "#ffffff",
      },

      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.04)",
      },

      scale: {
        102: "1.02",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};