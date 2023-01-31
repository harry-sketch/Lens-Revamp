/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          1: "#ABD396",
          lens01: "#00501E",
          lens02: "#ABFD2C",
          lens03: "#ABD396",
          lens04: "#E5FFBE",
        },
        btn: {
          primary: "#E5FFBE",
        },

        rgbColors: {
          1: "rgba(18, 18, 20, 0.8)",
          2: "rgba(171, 253, 44, 0.1)",
          3: "rgba(171, 211, 150, 0.2)",
        },
      },
    },
  },
  plugins: [],
};
