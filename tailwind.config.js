module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Grand Hotel"', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
