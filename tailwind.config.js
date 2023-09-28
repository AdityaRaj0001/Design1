/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'model1':"url(./src/assets/oldman1.jpg)",
        'model2':"url(./src/assets/oldman2.jpg)"
      })
    },
  },
  plugins: [],
}