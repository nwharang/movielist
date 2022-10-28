/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {

    extend: {
      flex: {
        '1/4': '0 0 23%'
      }
    },
    minHeight: {
      '1/2': '50%'
    },
    maxWidth: {
      '1/2': '50%'
    }
  },
  plugins: [],
}