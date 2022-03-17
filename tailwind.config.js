module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maincolor: '#4861DF',
        bgs: {
          home: '#f2f2f2',
          card: '#ffffff',
          btn: '#4861DF',
        },
        heading: {
          2: '#4861DF',
        },
        bordering: '#4861DF',
      },
    },
  },
  variants: {
    display: [
      'children',
      'default',
      'children-first',
      'children-last',
      'children-odd',
      'children-even',
      'children-not-first',
      'children-not-last',
      'children-hover',
      'hover',
      'children-focus',
      'focus',
      'children-focus-within',
      'focus-within',
      'children-active',
      'active',
      'children-visited',
      'visited',
      'children-disabled',
      'disabled',
      'responsive',
    ],
  },
  plugins: [require('tailwindcss-children')],
};
