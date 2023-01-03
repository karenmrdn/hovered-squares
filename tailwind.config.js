const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    { pattern: /grid-cols-(5|15|25)/ },
    { pattern: /{h|w}-(5|15|25)/ },
    { pattern: /h-(5|15|25)-squares/ },
    { pattern: /w-(5|15|25)-squares/ },
    { pattern: /max-h-(5|15|25)-squares/ },
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: "#31373d",
      },
      gridTemplateColumns: {
        "squares-board": "auto 1fr",
        15: "repeat(15, minmax(0, 1fr))",
        25: "repeat(25, minmax(0, 1fr))",
      },
      spacing: {
        1.5: "0.4rem",
      },
      width: {
        "5-squares": "3rem",
        "15-squares": "1.75rem",
        "25-squares": "1.25rem",
      },
      height: {
        "5-squares": "3rem",
        "15-squares": "1.75rem",
        "25-squares": "1.25rem",
      },
      transitionTimingFunction: {
        popup: "cubic-bezier(0.24,0.9,0.47,0.92)",
      },
      minHeight: {
        screen70: "70vh",
      },
      maxHeight: {
        "5-squares": "16rem",
        "15-squares": "27rem",
        "25-squares": "32rem",
      },
      keyframes: {
        "slide-in": {
          from: {
            transform: "translateX(100%)",
            opacity: 0,
          },
          to: {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
      animation: {
        "slide-in": "slide-in 500ms ease-out",
      },
    },
  },
  plugins: [],
};
