/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "serif"],
      Volkhov: ["Volkhov", "serif"],
    },
    extend: {
      spacing: {
        myContainer: "1160px",
      },
      colors: {
        navColor: "#212832",
        A_Text: "#DF6951",
      },
      backgroundImage: {
        hero_decor: "url('/src/images/banner_decor.png')",
        hero_ellipse: "url('/src/images/banner_ellipse.png')",
      },
      boxShadow: {
        buttonShadow: "0px 15px 30px 0px rgba(223,105,81,0.3);",
      },
      
      animation: {
        plane: "plane 10s infinite",
      },
      keyframes: {
        plane: {
          "0%": {
            left: "-20px",
            transform: "scaleX(1) rotate(30deg)",
          },
          "50%": {
            top: "-126px",
            left: "488px",
            transform: "scaleX(1) rotate(30deg)",
            "z-index": "auto",
          },
          "51%": {
            transform: "scaleX(-1) rotate(15deg)",
            "z-index": "999",
          },
          "100%": {
            transform: "scaleX(-1) rotate(15deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
