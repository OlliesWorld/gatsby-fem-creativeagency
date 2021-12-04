module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
          red: {
            DEFAULT: '#F94F4F',
          },
          black: {
            DEFAULT: '#191921',
            dark: '#000000',
          },
          white: {
            DEFAULT: '#ffffff',
          },
      },
      
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }