import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        customGray: "#3d3e3d",
        customRed: "#D80E49",
        customGray2: "#292932",
        customMaroon: "#F25760",
        customGray3: "#292932",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      width: {
        'px108': '6.75rem', // 108px
        'px112': '7rem',    // 112px
        'px120': '7.5rem',  // 120px
        'px124': '7.75rem', // 124px
        'px128': '8rem',    // 128px
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
