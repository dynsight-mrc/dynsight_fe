import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
          oswald:['var(--font-oswald)'],
          opensans:['var(--font-open-sans)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        teltonika: {
          800: "#0054A6",
          900: "#0d459b",
        },
        teltonikaGray:{
          500:"#202124"
        }
      },
      width:{
        85:"340px"
      },
      padding:{
        85:"340px"
      },
      margin:{
        85:"340px"
      }
    },
    
  },
  plugins: [],
};
export default config;
