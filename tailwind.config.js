module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      se: "375px",
      mid: "1300px",
    },
    extend: {
      colors: {
        variants: {
          display: [
            "children",
            "default",
            "children-first",
            "children-last",
            "children-odd",
            "children-even",
            "children-not-first",
            "children-not-last",
            "children-hover",
            "hover",
            "children-focus",
            "focus",
            "children-focus-within",
            "focus-within",
            "children-active",
            "active",
            "children-visited",
            "visited",
            "children-disabled",
            "disabled",
            "responsive",
          ],
        },
        maincolor: "#4861DF",
        bgs: {
          home: "#f2f2f2",
          card: "#ffffff",
          btn: "#4861DF",
        },
        heading: {
          2: "#4861DF",
        },
        bordering: "#4861DF",
      },
      zIndex: {
        1: "1",
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "5/7": "71.4285714%",
      },
      width: {
        100: "25rem",
      },
      height: {
        500: "500px",
      },
      letterSpacing: {
        more: ".3em",
      },
      fontFamily: {
        playfair: ["Playfair Display"],
        old: ["Old Standard TT"],
        fred: ["Fredoka"],
      },
      contrast: {
        90: ".9",
      },
      variants: {
        display: [
          "children",
          "default",
          "children-first",
          "children-last",
          "children-odd",
          "children-even",
          "children-not-first",
          "children-not-last",
          "children-hover",
          "hover",
          "children-focus",
          "focus",
          "children-focus-within",
          "focus-within",
          "children-active",
          "active",
          "children-visited",
          "visited",
          "children-disabled",
          "disabled",
          "responsive",
        ],
      },
      fontSize: {
        xxs: [".75rem", { lineHeight: "16px" }],
      },
      screens: {
        phone: "360px",
      },
    },
  },
  plugins: [require("tailwindcss-children")],
};
