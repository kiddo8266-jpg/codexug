import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EDF5",
          100: "#C5D1E8",
          200: "#8CA3CC",
          300: "#5275AF",
          400: "#2A4E8E",
          500: "#0A1628",
          600: "#081221",
          700: "#060E1A",
          800: "#040A13",
          900: "#02060C",
        },
        cyan: {
          DEFAULT: "#06B6D4",
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
      },
      fontFamily: {
        sans: ["Inter", "'Segoe UI'", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "navy-to-cyan": "linear-gradient(135deg, #0A1628 0%, #06B6D4 100%)",
        "cyan-to-navy": "linear-gradient(135deg, #06B6D4 0%, #0A1628 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
