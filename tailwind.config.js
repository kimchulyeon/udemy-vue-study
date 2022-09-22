/**
 *  ! 커스터마이즈
 **/
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // 커스터마이즈
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
      },
    },
  },
  plugins: [],
};
