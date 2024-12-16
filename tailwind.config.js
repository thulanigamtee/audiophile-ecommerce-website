/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        orange: "var(--color-orange)", // Orange
        darkGray: "var(--color-dark-gray)", // Dark Gray
        lightGray: "var(--color-light-gray)", // Light Gray
        lighterGray: "var(--color-lighter-gray)", // Lighter Gray
        lightOrange: "var(--color-light-orange)", // Light Orange (Peach)
        white: "var(--color-white)", // White
        black: "var(--color-black)", // Black
      },
    },
  },
  plugins: [],
};
