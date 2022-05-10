const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	darkMode: "class",
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./widgets/**/*.{js,ts,jsx,tsx}",
		"./theme/**/*.{js,ts,jsx,tsx}",
		"../../packages/**/*.{js,ts,jsx,tsx}",
		"./theme/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			transitionProperty: {
				height: "height",
			},
			spacing: {
				128: "32rem",
			},
			maxWidth: {
				1200: "1200px",
			},
			content: {
				minus: 'url("./public/minus.svg")',
			},
			transitionDelay: {
				0: "0ms",
				5000: "5000ms",
			},
			fontFamily: {
				sans: ["Inter var", ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				"8xl": "6.25rem",
			},
			letterSpacing: {
				widest: ".10em",
			},
			colors: {
				primary: {
					25: "#FAE4D3",
					50: "#FAE4D3",
					100: "#FAE4D3",
					200: "#F5CAA7",
					300: "#F0AF7A",
					400: "#EB954E",
					500: "#E67A22",
					600: "#B8621B",
					700: "#8A4914",
					800: "#5C310E",
					900: "#42230A",
				},
				blue: {
					1000: "#017cfe",
					1200: "#08286a",
				},
				gray: {
					10: "#f8f9fa",
					25: "#D4D5D5",
					50: "#D4D5D5",
					100: "#D4D5D5",
					200: "#A9ABAC",
					300: "#7E8082",
					400: "#535659",
					500: "#282C2F",
					600: "#202326",
					700: "#181A1C",
					800: "#101213",
					900: "#080909",
					1000: "#f4f8f8",
					1200: "#C9DBDB",
				},
				pink: {
					10: "#e2c6cd",
				},
				error: {
					25: "#FCE8EA",
					50: "#FCE8EA",
					100: "#FCE8EA",
					200: "#FAD1D4",
					300: "#F4A4A9",
					400: "#EF767F",
					500: "#EB515C",
					600: "#BC414A",
					700: "#8D3137",
					800: "#5E2025",
					900: "#2F1012",
				},
				warning: {
					25: "#FFECE6",
					50: "#FFECE6",
					100: "#FFECE6",
					200: "#FEDACD",
					300: "#FDB59B",
					400: "#FD9773",
					500: "#FC7C4E",
					600: "#FB581D",
					700: "#E23E04",
					800: "#B03103",
					900: "#7D2302",
				},
				success: {
					25: "#FFECE6",
					50: "#FFECE6",
					100: "#FFECE6",
					200: "#FEDACD",
					300: "#FDB59B",
					400: "#FD9773",
					500: "#FC7C4E",
					600: "#FB581D",
					700: "#E23E04",
					800: "#B03103",
					900: "#7D2302",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	//plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
