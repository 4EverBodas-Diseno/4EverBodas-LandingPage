/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#FF477E",
        secondary: "#486284",
        "primary-50": "#FFDFE9",
      },
    },
  },
  plugins: [],
};
