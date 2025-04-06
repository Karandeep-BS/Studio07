// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fugaz: ['"Fugaz One"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        sansation: ['"Sansation"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
