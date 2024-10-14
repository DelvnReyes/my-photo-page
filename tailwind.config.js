/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    lg: '960px',
    md: "1060px",
  },
  extend: {
    colors: {
      primary: '#0a0a0a',
      accent: '#B809C3',
    },
  },
  plugins: []
}


