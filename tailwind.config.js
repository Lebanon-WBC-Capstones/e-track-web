module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme1: '#20C34E',
        theme2: '#605CA8',
        theme3: '#DD4B39',
        theme4: '#3C8DBC',
        theme5: '#F39C12',
        primary: '#64CF62',
        lightGrey: '#F4F4F4',
        Grey: '#3F3B3B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
