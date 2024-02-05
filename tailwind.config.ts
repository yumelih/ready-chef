import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "lingr-withImg":
          "linear-gradient(90deg, rgba(2,0,36,0.9) 0%, rgba(10,15,64,0.9) 100%), url('/static/images/header-img.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
