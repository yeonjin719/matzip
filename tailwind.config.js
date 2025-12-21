/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/colors.ts').default;

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    './App.tsx',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        color: colors,
      },
    },
  },
  plugins: [],
};
