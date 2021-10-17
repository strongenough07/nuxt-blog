module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        // Configure your color palette here
        'brand-100': '#D2B186',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
