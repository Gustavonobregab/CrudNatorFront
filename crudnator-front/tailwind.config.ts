import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerColors: {
          1: "var(--crudNAtor-1)",
          2: "var(--crudNAtor-2)",
          3: "var(--crudNAtor-3)",
          4: "var(--crudNAtor-4)",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;


