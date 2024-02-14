/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      'darkNavy': '#313E51',
      'purple': '#A729F5',
      'navy': '#3B4D66',
      'greyNavy': '#626C7F',
      'lightBlue': '#ABC1E1',
      'lightGrey': '#F4F6FA',
      'green': '#26D782',
      'white': '#FFFFFF',
      'red': '#EE5454',
    },
    extend: {

    },
  },
  plugins: [],
}

