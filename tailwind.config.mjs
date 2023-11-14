/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "pop-in": "pop-in 0.4s ease-out",
      },
      keyframes: {
        "pop-in": {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "75%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
