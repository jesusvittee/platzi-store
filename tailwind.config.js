/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {},
    backgroundImage : {
      'bali' : 'url(../img/bali.jpg)',
      'chicago':'url(../img/chicago.jpg)',
      'europe':'url(../img/europe.jpg)',
      'iceland':'url(../img/iceland.jpg)',
      'LA':'url(../img/LA.jpg)',
      'miami':'url(../img/miami.jpg)',
      'newYork':'url(../img/new_york.jpg)',
      'norway':'url(../img/norway.jpg)',
      'sanFrancisco': 'url(../img/sanFrancisco.jpg)',
      'sanFranciscoDesktop':'url(../img/sanFranciscoDesktop.jpg)',
      'seattle':'url(../img/seattle.jpg)',
      'switzerland':'url(../img/switzerland.jpg)',
      'sydney':'url(../img/sydney.jpg)',
      'yosemite':'url(../img/yosemite.jpg)',
    },
    backgroundColor:theme => ({
      ...theme('colors'),
      'primary' : '#CC2D4A',
      'secondary' : '#8FA206',
      'terciary':'#61aec9',
      'white': '#ffffff',
      'black': '#000000'
    }),
    textColor:{
      'primary' : '#CC2D4A',
      'secondary' : '#8FA206',
      'terciary':'#61aec9',
      'white': '#ffffff',
      'black': '#000000',
      'gray-400':'#9ca3af',
      'gray-300':'#d1d5db'
    },
    fontFamily:{
      Montserrat :['Montserrat', 'sans-serif']
    }
  },
  varinats:{
    width:['responsive', 'hover', 'focus'],
    extend:{},
  },
  plugins: [],
}

