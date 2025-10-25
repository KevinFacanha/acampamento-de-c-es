/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'moss-green': '#4E6943',
        'mustard': '#E6A723',
        'light-brown': '#C9A66B',
        'off-white': '#FFF9F1',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'baloo': ['Baloo 2', 'cursive'],
      },
    },
  },
  plugins: [],
};
