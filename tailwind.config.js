const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "grid-cols-5",
    "grid-cols-15",
    "grid-cols-25",
    "h-5",
    "w-5",
    "h-15",
    "w-15",
    "h-25",
    "w-25",
    "h-5-squares",
    "w-5-squares",
    "h-15-squares",
    "w-15-squares",
    "h-25-squares",
    "w-25-squares",
    "max-h-5-squares",
    "max-h-15-squares",
    "max-h-25-squares",
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
