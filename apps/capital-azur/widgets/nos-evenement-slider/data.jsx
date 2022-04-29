export const data = {
	title: "NOS ÉVÉNEMENTS PARTOUT DANS LE MONDE",
	description: "",
	button: "VOIR PLUS D'EVENEMENTS",
	dataSlider: [
		{
			id: 0,
			title: " Capital Azur exposera à Seamless East Africa",
			excerpt: "  Capital Azur exposera à Seamless East Africa",
			image: (
				<img
					className="w-full h-full object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
					src="https://capital-azur.com/sites/default/files/2020-05/38e70ac1beba0588ca73eb1ab1957d60.jpg"
				/>
			),
			urlTag: "/about",
			url: "/about",
			urlContent: "LIRE PLUS",
			category: ["Nairobi", "Exposition"],
			className: "max-w-sm",
		},
		{
			id: 1,
			title: "Conférence - Africa Fintech Summit",
			excerpt:
				" Capital  Capital Azur participe à la conférence Africa Fintech Summit à Dakar exposera à Seamless East Africa",
			image: (
				<img
					className="w-full h-full object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
					src="https://capital-azur.com/sites/default/files/2020-05/Event2.jpeg"
				/>
			),
			urlTag: "/about",
			url: "/about",
			urlContent: "LIRE PLUS",
			category: ["Dakar", "Conférence"],
			className: "max-w-sm",
		},
		{
			id: 2,
			title:
				' "Entreprises de technologies financières, Blockchain et monnaies virtuelles "par la Bceao',
			excerpt:
				'  Capital Azur participe à la conférence "Entreprises de technologies financières, Blockchain et monnaies virtuelles" organisée par la Bceao',
			image: (
				<img
					className="w-full h-full object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
					src="https://capital-azur.com/sites/default/files/styles/vactory_one_col_x1/public/2020-05/Event1.jpg?h=ba6840e7"
				/>
			),
			urlTag: "/about",
			url: "/about",
			urlContent: "LIRE PLUS",
			category: ["Paris", "Conférence"],
			className: "max-w-sm",
		},
	],
}

export const sliderSettings = {
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
