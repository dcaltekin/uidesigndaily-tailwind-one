/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {container: {
      padding: {
        DEFAULT: '1rem',
        sm: '150px',
        lg: '300px',
        xl: '450px',
        '2xl': '600px',
      },
    },},
  },
  plugins: [],
}