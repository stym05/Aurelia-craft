import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF8F5",
        surface: "#F2EDE4",
        paper: "#F5F3F0",
        ink: "#22201E",
        muted: "#6E665E",
        gold: "#8F4F52",
        champagne: "#C98F86",
        line: "#E5DFD5",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "Arial", "sans-serif"],
      },
      maxWidth: { site: "1440px" },
      letterSpacing: { editorial: ".14em" },
    },
  },
  plugins: [],
};

export default config;
