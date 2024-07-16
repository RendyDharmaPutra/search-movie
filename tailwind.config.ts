import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#00BFFF",
				secondary: "#87CEEB",
				page: "#D7ECFF",
				page2: "#F0F8FF",
			},
		},
	},
	plugins: [],
} satisfies Config;
