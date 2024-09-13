import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: ".5rem",
        },
      },
      colors: {
        // Background colors
        bgFirst: "#000000",
        bgSecond: "#0f0f0f",
        bgThird: "#191919",
        bgFourth: "#1e1e1e",
        bgFifth: "#232323",
        bgSixth: "#3f3d3d",

        // Text colors
        textFirst: "#fafafa",
        textSecond: "#ededed",
        textThird: "#eeeeee",
        textFourth: "#eaeaea",
        textFifth: "#a1a1a1",
        textSixth: "#a3a3a3",
      },
    },
  },
  plugins: [],
};

export default config;
