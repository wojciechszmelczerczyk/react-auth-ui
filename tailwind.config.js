/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      colors: {
        pink: "#FFF3F0",
        orange_form: "#F47458",
        hover_orange_form: "#F46458",

        orange_input: "#FFF6F4",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
