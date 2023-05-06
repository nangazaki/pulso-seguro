/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F9F9F9',

        'primary': '#199254',
        'secondary': '#5ace5a',
        'tertiary': '#a0cc36',

        'primary-darker': '#167f49',
        'secondary-darker': '#4db14d',
        'tertiary-darker': '#8bb330',

        'primary-rgb': '25, 146, 84',
        'secondary-rgb': '90, 206, 90',
        'tertiary-rgb': '160, 204, 54',
        'quaternary-rgb': '54, 204, 145',

        'gradient-1': '#199254',
        'gradient-2': '#1b9858',
        'gradient-3': '#1c9d5b',
        'gradient-1-lighter': '#1b9858',
        'gradient-1-darker': '#17854c',
        'theme-image-filter': 'hue-rotate(286deg) contrast(0.7) brightness(0.9)',

        'menu-hover': '#ffffff75',
      },
      boxShadow: {
        'card': '0 4px 10px #00000008'
      },
      screens: {
        'desktop': '1440px',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}