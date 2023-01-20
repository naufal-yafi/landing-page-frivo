/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      'neutral-900': '#343A40',
      'neutral-800': '#515559',
      'neutral-400': '#8B99A7',
      'neutral-100': "#C6C6C6",
      'neutral-50': '#F3F7F9',
      'blue-600': '#096ECC',
      'blue-500': '#309AFC',
      'blue-100': '#CCE5F9',
      'blue-50': '#E9F2F9',
      'orange-600': '#CE6A0D',
      'orange-500': '#FC9230',
      'orange-100': '#EBDCCB',
      'green-500': '#11990F',
      'green-100': '#C5E5CA'
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
