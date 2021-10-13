module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      boxShadow: {
        classic: '0 0 15px rgba(0,0,0,0.15)',
      },
      spacing: {
        128: '32rem',
      },
      height: {
        65: '65vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
