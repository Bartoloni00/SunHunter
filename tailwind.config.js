/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#008248',
          200: '#49b274',
          300: '#b0ffd5',
        },
        accent: {
          100: '#FFD700',
          200: '#917800',
        },
        bg: {
          100: '#F5F5F5',
          200: '#ebebeb',
          300: '#c2c2c2',
        },
        text: {
          100: '#333333',
          200: '#5c5c5c',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};