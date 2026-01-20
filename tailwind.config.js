module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#004d40" },
      animation: { "spin-slow": "spin 20s linear infinite" },
    },
  },
  plugins: [],
};
