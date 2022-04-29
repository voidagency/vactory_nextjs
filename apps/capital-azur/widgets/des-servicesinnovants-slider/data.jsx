export const data = {
	title: "DES SERVICES INNOVANTS POUR UN QUOTIDIEN SIMPLIFIÉ.",
	description:
		"Capital Azur accompagne l’ensemble de sa clientèle dans leurs projets à toutes les étapes de leurs vie.",
	dataSlider: [
		{
			id: 0,
			title: "Comptes & Cartes",
			image: "https://capital-azur.com/sites/default/files/2020-05/18.png",
		},
		{
			id: 1,
			title: "Epargne",
			image: "https://capital-azur.com/sites/default/files/2020-05/17.png",
		},

		{
			id: 2,
			title: "crédit",
			image: "https://capital-azur.com/sites/default/files/2020-05/16_0.png",
		},
		{
			id: 2,
			title: "Assurance",
			image: "https://capital-azur.com/sites/default/files/2020-05/18.png",
		},
	],
	button: "",
}

export const sliderSettings = {
	loop: true,
	rtl: false,
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 1 },
		},
		"(min-width: 900px)": {
			slides: { perView: 4, spacing: 20 },
		},
	},
	defaultAnimation: {
		duration: 500,
	},
	opacity: false,
}
