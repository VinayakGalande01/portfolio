/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D00",
        surface: "#0A0A0A",
        muted: "#A1A1A1",
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        header: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        container: "24px",
      },
      screens: {
        'bento': '800px',
      },
    },
  },
  plugins: [],
}
