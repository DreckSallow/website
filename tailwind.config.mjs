import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"selector",
	theme: {
		extend: {
			colors: {
				"back": "#fafafa",
				"brand": "#33a7e0",
				"heading":"#0c3445",
				"txt": "#0c3445",
				"dark-back":"#202021",
				"dark-heading":"white",
				"dark-txt":"#c8d8e8"
			},
			fontFamily: {
				poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				pager: {
					"0%, 100%": { height: "0%" },
					"65%": { height: "100%" },
				}
			},
			animation: {
				pager: "pager 2.5s ease-in-out"
			},
			boxShadow: ({ theme }) => ({
				"outer": `0px 0px 15px 8px ${theme('colors.brand')}`
			}),

		},
	},
	plugins: [],
}
