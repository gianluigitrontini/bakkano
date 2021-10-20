module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      boxShadow: {
        classic: '0 0 15px rgba(0,0,0,0.10)',
      },
      spacing: {
        128: '32rem',
      },
      height: {
        65: '65vh',
        header: '80px',
      },
      minHeight: {
        65: '65vh',
        215: '215px',
      },
      fontFamily: {
        windi: ['Windi', 'sans-serif'],
      },
      colors: {
        'brand-brown': '#9c6d27',
        'brand-green': '#618a23',
        'brand-dark-1': '#323232',
      },
      minWidth: {
        'fit-content': 'fit-content',
        150: '150px',
      },
      width: {
        'fit-content': 'fit-content',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
