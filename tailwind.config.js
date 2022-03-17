module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};
