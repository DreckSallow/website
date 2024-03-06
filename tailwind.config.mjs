import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"back":"#fafafa",
				"back-2":"#f3f4f2",
				// "brand":"#3e87ad"
				"brand":"#33a7e0",
				"txt":"#0c3445"
			},
			fontFamily:{
				poppins:["Poppins",...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
