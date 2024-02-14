/** @type {import('tailwindcss').Config} */
// import './src/assets/background.png'
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'herobg': "url('../src/assets/background.png')",
        'firstbg': "url('../src/assets/firstbg.png)",
      }
    },
  },
  plugins: [],
}

