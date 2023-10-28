import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
};
export default config;
