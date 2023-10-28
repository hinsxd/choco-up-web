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
          /**
         *    --dark-slate-grey: #3d3d43;
              --midnight-blue: #061849;
              --dark-slate-blue: #43537c;
              --medium-slate-blue: #7352ff;
              --white-smoke: #f5f8fa;
              --white: white;
              --indian-red: #e35757;
              --white-smoke-2: #e8e8eb;
              --lavender: #ebe7f6;
         */
          "dark-slate-grey": "var(--dark-slate-grey)",
          "midnight-blue": "var(--midnight-blue)",
          "dark-slate-blue": "var(--dark-slate-blue)",
          "medium-slate-blue": "var(--medium-slate-blue)",
          "white-smoke": "var(--white-smoke)",
          white: "var(--white)",
          "indian-red": "var(--indian-red)",
          "white-smoke-2": "var(--white-smoke-2)",
          lavender: "var(--lavender)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
