const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: "#31373d",
      },
      gridTemplateColumns: {
        "squares-board": "auto 1fr",
        25: "repeat(25, minmax(0, 1fr))",
      },
      spacing: {
        1.5: "0.4rem",
      },
      transitionTimingFunction: {
        popup: "cubic-bezier(0.24,0.9,0.47,0.92)",
      },
      minHeight: {
        screen70: "70vh",
      },
    },
  },
  plugins: [],
};
