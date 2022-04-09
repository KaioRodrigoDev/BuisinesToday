const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/components/*.js', './src/pages/*/*.js', './src/pages/*.js'],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        principal: '#9400c0',
        principalh: '#9400c0',
        blue: '#29235C',
        bg: '#111827'
      }
    }
  },
  plugins: []
}
