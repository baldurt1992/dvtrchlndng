import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        primaryDark: "rgba(255,255,255, 0.7);",
        secondary: "#fb5607",
      },
      backgroundImage: {
        radialBlack:
          "linear-gradient(225.95deg, #ffffff 0%, #6d6d6d 0%, #11101d 91.61%)",
        blueRadial:
          "linear-gradient(to right, #8338ec, #6e3aff)",
        blueLight:
          "linear-gradient(to right, #ffbe0b, #fb5607, #3a86ff)",
        color1:
        "#ffbe0b",
        color2:
        "fb5607",
        color3:
        "#3a86ff",
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
