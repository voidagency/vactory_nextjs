export const DataSlider2 = [
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
]

export const SliderIconSettings = {
	loop: true,
	rtl: false,
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 1, spacing: 25, origin: "center" },
		},
		"(min-width: 900px)": {
			slides: { perView: 4, spacing: 10 },
		},
	},
	defaultAnimation: {
		duration: 2000,
	},
	opacity: false,
}
