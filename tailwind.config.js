/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        bebas: ["var(--font-bebas)"],
        tungsten: ["Tungsten", "sans-serif"],
        dinnext: ["DINNextW05", "sans-serif"],
      },
    },
    colors: {
      color: {
        accent: "#F9564F",
        primary: "#ece8e1",
        secondary: "#393e46",
        tertiary: "#01AFDF",
        dark: "#131A2A",
        white: "#FFFAFF",
      },
    },
  },
  plugins: [],
};
