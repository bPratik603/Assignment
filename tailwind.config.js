/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          'light': '#112240',
          'DEFAULT': '#0a192f',
          'dark': '#020c1b',
        },
        'accent': '#64ffda',
        'slate': {
          'light': '#ccd6f6',
          'DEFAULT': '#8892b0',
        }
      }
    },
  },
  plugins: [],
}
