module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-dark": "#b8962e",
        "gold-light": "#f0d97a",
        /* Override Shadcn primary → emas supaya tombol default ikut emas */
        primary: {
          DEFAULT: "#D4AF37",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
