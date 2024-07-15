/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        orange: "#F95C19",
        primary:"#222132",
        secondary: "#FDF8EF",
        background: "#fef5e3"
      },
    },
  },
  plugins: [],
};
