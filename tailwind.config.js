module.exports = {
  purge: ["./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Montserrat"],
        sans: ["Poppins"],
        mono: ["Space Mono"],
      },
      svg: {
        display: "inline-block",
        "vertical-align": "-.125em",
        width: "1em",
        height: "1em",
      },
      maxWidth: {
        xl: "38rem",
      },
    },
    screens: {
      md: "576px",
      lg: "1024px",
    },
  },
};
