import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f3ec",
        surface: "#ece3da",
        primary: "#4f7c6b",
      },
    },
  },
  plugins: [],
};

export default config;
