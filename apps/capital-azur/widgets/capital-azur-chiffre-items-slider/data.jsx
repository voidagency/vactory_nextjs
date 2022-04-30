export const sliderSettings = {
	loop: true,
	rtl: false,
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 1 },
		},
		"(min-width: 900px)": {
			slides: { perView: 3, spacing: 25 },
		},
	},
	defaultAnimation: {
		duration: 2000,
	},
	opacity: false,
}

export const data = {
	title: "",
	description: "",
	dataSlider: [
		{
			id: 0,
			chiffre: 1,
			title: "banque digital en afrique",
		},
		{
			id: 1,
			chiffre: 13,
			title: "Pays de présence en afrique",
		},
		{
			id: 2,
			chiffre: 3,
			title: "Milliards $ de produits Net bancaire",
		},
	],
	button: "Communication financiere 2019",
	buttonIcon: "lock-closed-solid",
}
