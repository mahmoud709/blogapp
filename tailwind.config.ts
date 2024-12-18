import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			primary: {
				"100": "#e0e7ff",
				"200":"#bfdbfe",
				"300":"#93c5fd",
				"400":"#60a5fa",
				"500":"#3b82f6",
				"600":"#2563eb",
				"700":"#4338ca",
				"800":"#1e40af",
				"900":"#1e3a8a",
				DEFAULT: "#EE2B69",
			},
			secondary: "#FFF",
			black: {
				"100": "#333333",
				"200": "#141413",
				"300": "#7D8087",
				DEFAULT: "#000000",
			},
			white: {
				"100": "#F7F7F7",
				DEFAULT: "#FFFFFF",
			},
		},
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
