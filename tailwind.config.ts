import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f4c81",
        secondary: "#0fa490",
        background: "#F0F0F0",
        highlight: "#0FA490 ",
        grey1: "#D9D9D9",
      },
      maxWidth: {
        primary: "1594px",
      },
      screens: {
        "sc-1400": "1400px",
        "sc-1200": "1200px",
        "sc-1100": "1100px",
        "sc-768": "768px",
        "sc-500": "500px",
        "sc-300": "300px",
      },
    },
  },
  plugins: [],
};
export default config;
