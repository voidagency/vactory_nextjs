export const dataContainer3 = {
	title: "DES SERVICES INNOVANTS POUR UN QUOTIDIEN SIMPLIFIÉ.",
	paragraph:
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

export const sliderSettingsContainer3 = {
	loop: true,
	rtl: false,
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 1 },
		},
		"(min-width: 900px)": {
			slides: { perView: 4, spacing: 10 },
		},
	},
	defaultAnimation: {
		duration: 500,
	},
	opacity: false,
}

export const dataContainer5 = {
	title: "NOS ÉVÉNEMENTS PARTOUT DANS LE MONDE",
	paragraph: "",
	dataSlider: [
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

export const sliderSettingsContainer5 = {
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
