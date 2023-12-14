/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        navText: ["Montserrat"],
      },
      colors: {
        "main-blue": "#23A6F0",
      },
    },
  },
  plugins: [],
};
