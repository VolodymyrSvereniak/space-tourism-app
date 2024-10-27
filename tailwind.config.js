/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: "0.9",
          },
          "100%": {
            opacity: "1",
          },
        },
      },

      animation: {
        fade: "fade 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
