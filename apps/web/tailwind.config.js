const colors = require('tailwindcss/colors');
const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  plugins: [
    createThemes(
      {
        light: {
          primary: colors.indigo['500'],
          secondary: colors.orange['400'],
          accent: colors.teal['600'],
        },
        dark: {
          primary: colors.indigo['300'],
          secondary: colors.orange['300'],
          accent: colors.teal['500'],
        },
      },
      { getThemeClassName: (themeName) => themeName }
    ),
  ],
  theme: {
    extend: {
      keyframes: ({ theme }) => ({
        typing: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        'blink-caret': {
          from: {
            borderRight: `0.2em solid ${theme('colors.secondary')}`,
          },
          to: { borderColor: theme('colors.secondary') },
          '50%': { borderColor: 'transparent' },
        },
      }),
      animation: {
        typing: 'typing 1.5s steps(11, end), blink-caret 1s step-end 5',
      },
    },
  },
};
