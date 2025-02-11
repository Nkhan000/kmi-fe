/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "brand-gradient-01":
        "linear-gradient(180deg, rgba(246,255,245,1) 0%, rgba(195,255,198,0.70) 35%, rgba(195,255,198,0.63) 100%)",
      "brand-gradient-02":
        "linear-gradient(0deg, rgba(246,255,245,1) 0%, rgba(195,255,198,0.63) 35%, rgba(195,255,198,0.63) 100%)",
      "brand-gradient-03": "linear-gradient(to bottom right, #4ade80, #16a340)",
    },
    colors: {
      primary: {
        50: "#E1E8EF",
        100: "#D4DEE7",
        200: "#B7C7D7",
        300: "#99B0C7",
        400: "#7C99B6",
        500: "#5E82A6",
        600: "#4C6B8A",
        700: "#3C546C",
        800: "#2C3D4F",
        900: "#1B2631",
        950: "#141C24",
      },
      accent: {
        50: "#FAF5F0",
        100: "#F4ECE1",
        200: "#E8D6BF",
        300: "#DDC2A2",
        400: "#D2AF84",
        500: "#C69963",
        600: "#B78343",
        700: "#926835",
        800: "#6C4D28",
        900: "#4B351B",
        950: "#382814",
      },
    },
  },
};
export const plugins = [];
