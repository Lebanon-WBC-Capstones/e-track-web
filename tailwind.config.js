module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#64CF62',
        lightGrey: '#F4F4F4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
