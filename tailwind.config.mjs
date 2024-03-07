import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"back": "#fafafa",
				"back-2": "#f3f4f2",
				// "brand":"#3e87ad"
				"brand": "#33a7e0",
				"txt": "#0c3445"
			},
			fontFamily: {
				poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				pager: {
					"0%, 100%": { height: "0%" },
					"50%": { height: "100%" }
				}
			},
			animation: {
				pager: "pager 2.5s ease-in-out"
			}
		},
	},
	plugins: [],
}
