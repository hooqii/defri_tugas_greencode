/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tugas-layouting-7/**/*.{html,js}"],
  theme: {
    // colors: {
      // primary: "#FAF6F4",
    //   white: "#FFFFFF",
    //   gray: "#E6E6E6",
    //   p06: "#865439"
    // },
    extend: {
      height: {
        83: "83vh",
        75: "70vh",
        110: "110vh",
      },
      width: {
        70: "70vh",
        110: "110vh",
      },
    },
  },
  plugins: [],
};
