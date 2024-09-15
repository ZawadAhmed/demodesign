/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
          'c-white':'#FFFDF9',
          'neutrals': '#EBE9E5',
          'prblue': '#004E98',
          'beige': '#DDCFB1'
        }
    },
  },
  plugins: [],
}

