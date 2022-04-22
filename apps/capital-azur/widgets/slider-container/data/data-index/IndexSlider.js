export const dataContainerSlider = {
	title: "NOS ÉVÉNEMENTS PARTOUT DANS LE MONDE",
	paragraph: "",
	cardSliderData: [
		{
			id: 0,
			title:
				' "Entreprises de technologies financières, Blockchain et monnaies virtuelles "par la Bceao',
			excerpt:
				' Capital Azur participe à la conférence "Entreprises de technologies financières, Blockchain et monnaies virtuelles " organisée par la Bceao',
			image: (
				<img
					className="w-full h-full object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
					src="https://capital-azur.com/sites/default/files/2020-05/38e70ac1beba0588ca73eb1ab1957d60.jpg"
				/>
			),
			urlTag: "/about",
			url: "/about",
			urlContent: "LIRE PLUS",
			category: ["Paris", "Conférence"],
			className: "max-w-sm",
		},
		{
			id: 1,
			title: "Capital Azur exposera à Seamless East Africa",
			excerpt: " Capital Azur exposera à Seamless East Africa",
			image: (
				<img
					className="w-full h-full object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
					src="https://capital-azur.com/sites/default/files/2020-05/Event2.jpeg"
				/>
			),
			urlTag: "/about",
			url: "/about",
			urlContent: "LIRE PLUS",
			category: ["Nairobi", "Exposition"],
			className: "max-w-sm",
		},
	],
	button: "",
}

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
