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

        'primaria-claro': '#1CA35E',
        'primaria-normal': '#009A69',
        'primaria-escuro': '#209A6E',

        'cinza-1': '#333',
        'cinza-2': '#4F4F4F',
        'cinza-3': '#828282',
        'cinza-4': '#BDBDBD',
        'cinza-5': '#E0E0E0',
        'cinza-6': '#F2F2F2',

        'preto-claro': '#353436',
        'preto-normal': '#232224',
        'preto-escuro': '#161617',

        'branco-claro': '#FFF',
        'branco-normal': '#F7F2FA',
        'branco-escuro': '#EDEAEF',

        'vermelho-claro': '#F2C2C2',
        'vermelho-normal': '#F28C8C',
        'vermelho-escuro': '#F26F6F',

        'amarelo-claro': '#FFCE52',
        'amarelo-normal': '#D9B043',
        'amarelo-escuro': '#FFB76B',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}