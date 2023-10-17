const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kalam: ["Kalam", "cursive"],
      indie: ["Indie Flower", "cursive"],
    },
    extend: {
      backgroundImage: {
        "head-bg": "url('https://i.ibb.co/GdzkSmk/15.jpg')",
        "coffee-bg": "url('https://i.ibb.co/ZNGMj7y/11.png')",
      },
      colors: {
        input: "#1B1A1ACC",
      },
    },
  },
  plugins: [require("daisyui")],
});
