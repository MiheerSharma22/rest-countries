/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        darkElements: "hsl(209, 23%, 22%)",
        darkBg: "hsl(207, 26%, 17%)",
        lightModeText: "hsl(200, 15%, 8%)",
        lightInput: "hsl(0, 0%, 52%)",
        lightBg: "hsl(0, 0%, 98%)",
        darkModeTextLightElements: "hsl(0, 0%, 100%)"
      },
    },
  },
  plugins: [],
};
