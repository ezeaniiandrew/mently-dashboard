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
        foreground: "var(--foreground)",
        "sidebar-background": "var(--sidebar-background)",
        "grey-1": "var(--grey-1)",
        "grey-2": "var(--grey-2)",
        "grey-3": "var(--grey-3)",
        "grey-4": "var(--grey-4)",
        "grey-5": "var(--grey-5)",
        "grey-6": "var(--grey-6)",
        "grey-7": "var(--grey-7)",
        "grey-8": "var(--grey-8)",
        "heading-color-1": "var(--heading-color-1)",
        "heading-color-2": "var(--heading-color-2)",
        "color-1": "var(--color-1)",
        "color-2": "var(--color-2)",
        "color-3": "var(--color-3)",
        "color-secondary": "var(--color-secondary)",
        "primary-color-1": "var(--primary-color-1)",
        "primary-color-2": "var(--primary-color-2)",
        "primary-color-3": "var(--primary-color-3)",
        "primary-color-4": "var(--primary-color-4)",
        "profile-color-1": "var(--profile-color-1)",
        "profile-color-2": "var(--profile-color-2)",
        "profile-color-3": "var(--profile-color-3)",
        "profile-color-4": "var(--profile-color-4)",
        "accent-color-1": "var(--accent-color-1)",
        "accent-color-2": "var(--accent-color-2)",
        "accent-color-3": "var(--accent-color-3)",
        "primary-pressed-ghost": "var(--primary-pressed-ghost)",
        "secondary-color-3": "var(--secondary-color-3)",
        "link-color": "var(--link-color)",
        "card-background": "var(--card-background)",
        "button-gradient": "var(--button-gradient)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
