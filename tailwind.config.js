module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        se: '375px',
        mid: '1300px',
      },
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
      letterSpacing: {
        more: '.3em',
      },
      fontFamily: {
        playfair: ['Playfair Display'],
        old: ['Old Standard TT'],
        fred: ['Fredoka'],
      },
      contrast: {
        90: '.9',
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
    },
  },
  plugins: [require('tailwindcss-children')],
};
