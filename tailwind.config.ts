import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./layers/mainPage/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
    },
  },
  plugins: [],
};
export default config;
