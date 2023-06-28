/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primarycolor-blue":"#BBD8EC",
        "dark-gray-color":"#232325",
        "darker-primary-blue":"#ADCADE",
        "even-darker-gray":"#1B1A1D"

      },
      fontFamily:{
        "ff-playfair-display":["Playfair Display, serif;"]
      }
    },
  },
  plugins: [],
}

