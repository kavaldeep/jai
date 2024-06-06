/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "chart-pattern" : "url('/bg/bg-chart.png)",
          "computer" : "url('/bg/bg-most-advanced.png')",
          "playstore" : "url('/bg/bg-play-store.png')",
          "appstore" : "url('/bg/bg-app-store.png')",
          "face" : "url('/bg/bg-face.png')",
          "hero" : "url('/bg/bg-hero.png')",
      },
      colors: {
        'web-red': '#EF443B',
      },
      boxShadow: {
        'custom-light' : ' 0 0 20px #EF443B',
      } 

    },
    container: {
      center : true,
      width : {
        DEFAULT: "1110px",
        xl : "1110px",
      },
    },
    width: {
      '176' : "176px",
    },
    height: {
      '55' : "55px",
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
  important: true,
};