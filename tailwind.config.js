/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ECEEFF',
        'coral-red': '#FF6452',
        'slate-gray': '#6D6D6D',
        'pale-blue': '#F5F6FF',
        'white-400': 'rgba(255, 255, 255, 0.80)'
      },
      fontFamily: {
        'palanquin': ['Palanquin', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('../src/assets/images/collection-background.svg')",
        'card': "url('../src/assets/images/thumbnail-background.svg')"
      },
      boxShadow: {
        '3x1': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
}
