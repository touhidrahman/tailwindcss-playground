const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: colors.cyan, // primary
      green: colors.green, // success
      yellow: colors.amber, // warn
      red: colors.orange, // danger
      gray: colors.trueGray,
    },
    extend: {

    },
  },
  variants: {},
  plugins: [],
}