import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./compponent/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        xblack :["x-black" , "sans-serif"],
        xbold :["x-bold" , "sans-serif"],
        xdemiBold :["x-demiBold" , "sans-serif"],
        xextraBold :["x-extraBold" , "sans-serif"],
        xlight :["x-light" , "sans-serif"],
        xregular :["x-regular" , "sans-serif"],
        xmedium :["x-medium" , "sans-serif"],
        xthin :["x-thin" , "sans-serif"],
        xultraLight :["x-ultraLight" , "sans-serif"],
  
  
  
  
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        clipPath: {
          'custom-left': 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
        clipPathr: {
          "clip-path-right": "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        clipPathru: {
          "clip-path-under": "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
       
      },
    },
  },
  plugins: [],
};
export default config;
