module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        retroBlack: "#0b0b0b",
        retroWhite: "#f7f7f6",
        retroCream: "#efe6d6",
        retroPink: "#ffb6c1"
      },
      fontFamily: {
        display: ["'Poppins'", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};