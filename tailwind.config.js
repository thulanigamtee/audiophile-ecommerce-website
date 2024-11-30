/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontSize: {
        h1: [
          "var(--font-size-h1)",
          {
            lineHeight: "var(--line-height-h1)",
            letterSpacing: "var(--letter-spacing-h1)",
          },
        ],
        h2: [
          "var(--font-size-h2)",
          {
            lineHeight: "var(--line-height-h2)",
            letterSpacing: "var(--letter-spacing-h2)",
          },
        ],
        h3: [
          "var(--font-size-h3)",
          {
            lineHeight: "var(--line-height-h3)",
            letterSpacing: "var(--letter-spacing-h3)",
          },
        ],
        h4: [
          "var(--font-size-h4)",
          {
            lineHeight: "var(--line-height-h4)",
            letterSpacing: "var(--letter-spacing-h4)",
          },
        ],
        h5: [
          "var(--font-size-h5)",
          {
            lineHeight: "var(--line-height-h5)",
            letterSpacing: "var(--letter-spacing-h5)",
          },
        ],
        h6: [
          "var(--font-size-h6)",
          {
            lineHeight: "var(--line-height-h6)",
            letterSpacing: "var(--letter-spacing-h6)",
          },
        ],
        paragraph: [
          "var(--font-size-paragraph)",
          {
            // lineHeight: "var(--line-height-paragraph)",
            letterSpacing: "var(--letter-spacing-paragraph)",
          },
        ],
        overline: [
          "var(--font-size-overline)",
          {
            lineHeight: "var(--line-height-overline)",
            letterSpacing: "var(--letter-spacing-overline)",
          },
        ],
        subtitle: [
          "var(--font-size-subtitle)",
          {
            lineHeight: "var(--line-height-subtitle)",
            letterSpacing: "var(--letter-spacing-subtitle)",
          },
        ],
        anchor: [
          "var(--font-size-anchor)",
          {
            lineHeight: "var(--line-height-anchor)",
            letterSpacing: "var(--letter-spacing-anchor)",
          },
        ],
      },
    },
  },
  plugins: [],
};
