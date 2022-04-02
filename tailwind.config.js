const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/components/*.js', './src/pages/*/*.js', './src/pages/*.js'],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        principal: '#9400d3',
        principalh: '#9400c0'
      }
    }
  },
  plugins: []
}
