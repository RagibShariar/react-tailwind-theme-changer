/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        light: "#ffffff",
        dark: "#1a1a1a",
      },
      textColor: {
        light: "#333333",
        dark: "#ffffff",
      },
    },
  },
  plugins: [],
};
