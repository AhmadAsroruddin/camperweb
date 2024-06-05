/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif']
      },
      colors: {
        primary: "#07C9F0",
        secondary: "#0287a8"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "2rem",
          "2xl": "6rem"
        }
      }
    },
  },
  plugins: [],
}

