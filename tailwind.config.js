/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        playfair:"'playfair display',serif",
        lato:"'Lato',sans-sarif",
      }
    },
  },
  plugins: [],
}