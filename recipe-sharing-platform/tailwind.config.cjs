/** @type {import('tailwindcss').Config} */
module.exports = {
  // These paths tell Tailwind where to scan for class names
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],

  darkMode: false, 

  theme: {
    extend: {},
  },

  plugins: [],
};
