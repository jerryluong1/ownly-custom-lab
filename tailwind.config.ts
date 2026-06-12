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
        paper: "var(--paper)",
        cream: "var(--cream)",
        sand: "var(--sand)",
        taupe: "var(--taupe)",
        ink: "var(--ink)",
        graphite: "var(--graphite)",
        muted: "var(--muted)",
        amber: "var(--amber)",
        "amber-deep": "var(--amber-deep)",
        woody: "var(--woody)",
        ginger: "var(--ginger)",
        mango: "var(--mango)",
        rose: "var(--rose)",
        ice: "var(--ice)",
        prussian: "var(--prussian)",
        sage: "var(--sage)",
        eco: "var(--eco)",
        background: "var(--paper)",
        foreground: "var(--ink)",
      },
      fontFamily: {
        display: ["var(--font-raleway)"],
        body: ["var(--font-raleway)"],
        mono: ["var(--font-raleway)"],
        sans: ["var(--font-raleway)"],
        raleway: ["var(--font-raleway)"],
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        pill: "var(--r-pill)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      }
    },
  },
  plugins: [],
} satisfies Config;
