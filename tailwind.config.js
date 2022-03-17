module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
      zIndex: {
        1: "1",
      },
      margin: {
        26: "6.5rem",
        12: "3.1rem",
      },
      height: {
        850: "850px",
      },
      width: {
        860: "860px",
      },
      letterSpacing: {
        more: ".3em",
      },
      fontFamily: {
        playfair: ["Playfair Display"],
        old: ["Old Standard TT"],
      },
      contrast: {
        90: ".9",
      },
    },
  },
  plugins: [require('tailwindcss-children')],
};
