import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#14B8A6",
          navy: "#0B1F3A",
          background: "#FBF4E5",
          body: "#1F2937",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        display: ["var(--font-sora)", "Sora", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(11, 31, 58, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
