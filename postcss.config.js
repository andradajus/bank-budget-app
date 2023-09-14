const tailwind = require('tailwindcss');

module.exports = {
  plugins: [require('./tailwind.config.js'), require('autoprefixer')]
}

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
