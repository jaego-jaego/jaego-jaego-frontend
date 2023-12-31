/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "128": "34rem",
      },
      colors: {
        "button-blue": "#2563EB",
        "color-white": "#fff",
        primary: "rgba(255, 255, 255, 0.50)",
      },
      backgroundColor: {
        "custom-gray": "rgba(217, 217, 217, 0.50)",
      },
      fontSize: {
        md: "1.5rem",
      },
    },
  },
  plugins: [],
};
