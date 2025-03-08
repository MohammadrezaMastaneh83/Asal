import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./compponent/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        fontfamily: {
          'fontfamily': 'var(--Light)'
        }
      },
    },
  },
  plugins: [],
};
export default config;
