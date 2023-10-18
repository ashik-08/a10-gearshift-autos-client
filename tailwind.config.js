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
        "main-bg": "url('https://wallpapercave.com/wp/wp5777356.jpg')",
      },
      colors: {
        metal: "#0080B2",
        menu: "#5bc4aa",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
});
