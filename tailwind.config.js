/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-1": ["Seymour One", "sans-serif"],
        "font-2": ["Righteous", "sans-serif"],
        "font-3": ["Poppins", "sans-serif"],
        "font-4": ["Lilita One", "sans-serif"],
        "font-5": ["Paytone One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
