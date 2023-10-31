import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        chocoup: {
          "dark-slate-grey": "var(--dark-slate-grey)",
          "midnight-blue": "var(--midnight-blue)",
          "dark-slate-blue": "var(--dark-slate-blue)",
          "medium-slate-blue": "var(--medium-slate-blue)",
          "white-smoke": "var(--white-smoke)",
          "indian-red": "var(--indian-red)",
          "white-smoke-2": "var(--white-smoke-2)",
          lavender: "var(--lavender)",
          blue: "var(--blue)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
