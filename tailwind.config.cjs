/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx, jsx}'],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif"
    },
    colors: {
      'red': {
        400: '#F75A68', 
      },
      'gray': {
        200: '#E1E1E6',
        400: '#C4C4CC',
        500: '#8D8D99',
        600: '#7C7C8A',
        700: '#323238',
        800: '#202024',
        900: '#121214',
      },
      'green': {
        500: "#00B37E",
        700: "#00875F",
      }
    },
    extend: {},
  },
  plugins: [],
};
