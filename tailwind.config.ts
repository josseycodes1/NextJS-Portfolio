import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F3B6C',
        secondary: '#624F82',
        accent: '#9F73AB',
        light: '#A3C7D6',
        josseypink1: "#FC46AA",
        josseypink2: "#F699CD",
        josseypink3: "#fdf2f8", //pink-50
        josseypink4: "#fce7f3", //pink-100 
        josseypink5:  "#fbcfe8", //pink-200
        josseypink6: "#f9a8d4", //pink-300  
        josseypink13: "#f472b6", //pink-400  
        josseypink7: "#ec4899", //pink-500  
        josseypink8: "#db2777", //pink-600  
        josseypink9: "#be185d", //pink-700  
        josseypink10: "#9d174d", //pink-800  
        josseypink11: "#831843", //pink-900  
        joseypink12: "#500724", //pink-950  

      },
    },
  },
  plugins: [],
} satisfies Config;
