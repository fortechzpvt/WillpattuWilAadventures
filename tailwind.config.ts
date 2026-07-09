import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--cream-rgb) / <alpha-value>)",
        dark:  "rgb(var(--dark-rgb)  / <alpha-value>)",
        brown: "rgb(var(--brown-rgb) / <alpha-value>)",
        gold:  "rgb(var(--gold-rgb)  / <alpha-value>)",
        rust:  "rgb(var(--rust-rgb)  / <alpha-value>)",
        sage:  "rgb(var(--sage-rgb)  / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans:    ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
