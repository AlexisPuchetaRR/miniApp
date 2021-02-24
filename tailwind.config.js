module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#FFE600',
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
