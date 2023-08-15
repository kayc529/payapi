/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      sm: '15px',
      md: '18px',
      lg: '24px',
      xl: '36px',
      '2xl': '48px',
      '3xl': '56px',
      '4xl': '72px',
    },
    lineHeight: {
      sm: '25px',
      md: '28px',
      lg: '32px',
      xl: '40px',
      '2xl': '56px',
      '3xl': '72px',
    },
    extend: {
      colors: {
        pink: '#da6d97',
        darkPink: '#ba4270',
        waterWhite: '#fbfcfe',
        darkBlue: '#36536b',
        veryDarkBlue: '#1b262f',
        grayishBlue: '#6c8294 ',
        grey: '#979797',
        lightGrey: 'rgba(151,151,151,0.5)',
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        public: ['Public Sans', 'sans-serif'],
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
