/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      'neutral-900': '#343A40',
      'neutral-50': '#F3F7F9',
      'blue-500': '#309AFC',
      'blue-100': '#CCE5F9',
      'orange-500': '#EE831F',
      'orange-100': '#EBDCCB',
      'green-500': '#11990F',
      'green-100': '#C5E5CA'
    },
    fontFamily: {
      'inter-reguler': ['Inter-Reguler', 'sans-serif'],
      'inter-medium': ['Inter-Medium', 'sans-serif'],
      'inter-bold': ['Inter-Bold', 'sans-serif'],
      'montserrat-bold': ['Montserrat-Bold', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
