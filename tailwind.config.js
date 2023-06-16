/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#373592",
        blue: "#191847",
        lightGray: "#C9C5D4",
        gray: "#E1DEE8",
        darkGray: "#666173",
        black: "#151516",
        orange: "#F5850B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
