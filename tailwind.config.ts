import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["DMSans", "sans-serif"],
    },
    extend: {
      colors: {
        text: "#0E0E0EFA",
        secondary: "#797979",
        "light-secondary": "#EEEEEECC",
        "light-gray": "#ADADADF0",
        "dim-gray": "#DEDEDEE5",
        "light-dim-gray": "#4C4C4CFA",
        black: "#0E0E0EFA",
        background: "#F9F9F9",
        "dim-black": "#343434EB",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
export default config;
