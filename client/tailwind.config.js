/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      
      colors: {
        primary: {
          500: '#FFFFFF',
          600: '#000000',
          700: '#E6E6FA'
        },
        secondary: {
          400: '#2A2AD1',
          500: '#4D4DDB'
        }

      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  }
}

