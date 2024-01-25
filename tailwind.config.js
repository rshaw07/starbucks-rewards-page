/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        starbucksLightGreen: "#008248",
        starbucksDarkGreen: "#1e3932",
        starbucksLightWhite: "#f1f8f6",
        starbucksCardsGreen: "#d4e9e2",
        starbucksYellow: "#f3f1e7",
      },
      backgroundImage: {
        "starbucks": "url('../main.jpg')" 
      }
    },
  },
  plugins: [],
}

