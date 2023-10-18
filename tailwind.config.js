const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kalam: ["Kalam", "cursive"],
      indie: ["Indie Flower", "cursive"],
      annie: ["Annie Use Your Telescope", "cursive"],
      charmon: ["Charmonman", "cursive"],
    },
    extend: {
      backgroundImage: {
        "main-bg": "url('https://i.ibb.co/vks6bTt/bg-img.webp')",
        "hero-bg": "url('https://i.ibb.co/dGZwrpG/banner-img.jpg')",
        "follow-bg": "url('https://i.ibb.co/RY2Zn6f/follow-img-bg.png')",
      },
      colors: {
        metal: "#0080B2",
        menu: "#5bc4aa",
        menu2: "#32c8b7",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
});
