const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.indigo['500'],
        secondary: colors.orange['400'],
      },
    },
  },
};
