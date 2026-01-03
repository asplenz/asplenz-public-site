import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        tightish: "-0.015em"
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(15, 23, 42, 0.06)"
      }
    }
  },
  plugins: []
} satisfies Config;
