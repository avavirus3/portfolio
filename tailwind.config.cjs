/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'backhome': "url('/src/assets/trees.jpg');",
      }
    },
  },
  plugins: [],
};
