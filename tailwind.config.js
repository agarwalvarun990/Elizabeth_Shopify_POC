/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './layout/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
      './templates/customers/*.liquid',
      './templates/*.liquid'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
  plugins: [],
}

