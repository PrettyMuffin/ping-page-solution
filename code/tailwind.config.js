/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "425px",
      },
      colors: {
        primary: {
          300: "hsl(223, 87%, 63%)",
          400: "RGBA(77, 123, 243, 1)",
        },
        paleBlue: "hsla(223, 87%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        neutral: {
          gray: "hsl(0, 0%, 59%)",
          darkBlue: {
            900: "hsl(209, 33%, 12%)",
          },
        },
      },
    },
  },
  plugins: [],
};
