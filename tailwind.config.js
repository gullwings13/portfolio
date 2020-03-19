const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Josefin Slab", ...defaultTheme.fontFamily.serif],
        sans: ["Fredericka the Great", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}