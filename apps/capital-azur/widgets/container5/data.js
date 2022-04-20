export const cardSliderData = [
	{
		id: 0,
		title: "What Blockchain Could Mean for Your Health Data",
		escerpt: "hello",
		image: (
			<img
				className="w-full h-52 object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
				src="https://capital-azur.com/sites/default/files/styles/vactory_two_cols_x1/public/2020-06/blockchain-data.jpg?h=cd72da00%201x,%20/sites/default/files/styles/vactory_two_cols_x2/public/2020-06/blockchain-data.jpg"
			/>
		),
		urlTag: "/about",
		url: "/about",
		urlContent: "LIRE PLUS",
		category: "ACTUALITE",
		className: "max-w-sm",
	},
	{
		id: 1,
		title:
			"Crise du Coronavirus : En Afrique, le mobile money pour endiguer la propagation",
		escerpt: "",
		image: (
			<img
				className="w-full h-52 object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
				src="https://capital-azur.com/sites/default/files/styles/vactory_two_cols_x1/public/2020-05/10.jpg?h=7ba75ed5%201x,%20/sites/default/files/styles/vactory_two_cols_x2/public/2020-05/10.jpg"
			/>
		),
		urlTag: "/about",
		url: "/about",
		urlContent: "LIRE PLUS",
		category: "ANALYSE",
		className: "max-w-sm",
	},
]

export const SliderCardSettings = {
	loop: true,
	rtl: false,
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 1 },
		},
		"(min-width: 900px)": {
			slides: { perView: 1 },
		},
	},
	defaultAnimation: {
		duration: 2000,
	},
	opacity: false,
}
