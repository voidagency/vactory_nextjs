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

export const dataSlider = {
	title: "",
	paragraph: "",
	dataSlider: [
		{
			id: 0,
		},
		{
			id: 1,
		},
		{
			id: 2,
		},
	],
	button: "Communication financiere 2019",
	buttonIcon: "lock-closed-solid",
}
