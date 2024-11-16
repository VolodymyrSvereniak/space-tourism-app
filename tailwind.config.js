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
      fontFamily: {
        barlowCondensed: ["var(--font-barlow-condensed)"],
        barlow: ["var(--font-barlow)"],
        bellefair: ["var(--font-bellefair)"],
      },
      lineHeight: {
        extended: "180%",
      },
      spacing: {
        540: "33.75rem",
      },
      colors: {
        blured: "rgba(255, 255, 255, 0.05)",
        "home-desc": "rgb(208, 214, 249)",
      },
      width: {
        extended: "calc(50% + 50px)",
      },
      borderWidth: {
        large: "88px",
      },
      // keyframes: {
      //   fade: {
      //     "0%": {
      //       opacity: "0.9",
      //     },
      //     "100%": {
      //       opacity: "1",
      //     },
      //   },
      //   animate: {
      //     "0%": {
      //       transform: "translateY(0)",
      //     },
      //     "100%": {
      //       transform: "translateY(100%)",
      //     },
      //   },
      // },
      animation: {
        fade: "fade 0.1s ease-in-out",
      },
    },
  },
  plugins: [],
};
