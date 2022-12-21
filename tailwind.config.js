/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tangerine': ["Tangerine", 'serif'],
        'italiana': ["Italiana", "serif"],
      },

    },
  },
  plugins: [],
}
