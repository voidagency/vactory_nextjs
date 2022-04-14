import React from "react"
import { Slider } from "./slider"
import { Template } from "./template"
import { Arrow } from "@vactory/ui/arrows"

const data = [
	{
		id: 0,
		title: "Capital Azur, votre banque en ligne",
		description:
			"  Application mobile, Banque en ligne : Découvrez une nouvelle expérience de navigation au cœur de vos comptes bancaires.",
		image: "https://capital-azur.com/sites/default/files/2020-12/slider-pro.jpg",
		link: "#",
	},
	{
		id: 1,
		title: "COVID-19 : Capital Azur accompagne ses clients Particuliers",
		description:
			"  Report d’échéances, financements…nous vous proposons les solutions les plus adaptées à votre situation",
		image: "https://capital-azur.com/sites/default/files/2020-05/1.jpg",
		link: "#",
	},

	{
		id: 2,
		title: "COVID-19 : Professionnels et Entreprises : Capital Azur vous accompagne",
		description:
			" 5 mesures pour accompagner nos clients Professionnels et Entreprises en Afrique",
		image: "https://capital-azur.com/sites/default/files/2020-05/3.jpg",
		link: "#",
	},

	{
		id: 3,
		title: "Gérer votre épargne en toute simplicité",
		description: " Profitez de tous les outils pour mieux gérer votre épargne",
		image: "https://capital-azur.com/sites/default/files/2020-05/1.jpg",
		link: "#",
	},
]

const defaultSettings = {
	rtl: false,
	loop: true,
	disabled: false,
	mode: "snap",
	rubberband: true,
	defaultAnimation: { duration: 5000 },
	renderMode: "precision",
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 1 },
		},
	},
	opacity: false,
}

const v1Settings = {
	loop: true,
	rtl: false,
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 2, spacing: 25, origin: "center" },
		},
		"(min-width: 768px)": {
			slides: { perView: 2, spacing: 25, origin: "center" },
		},
		"(min-width: 900px)": {
			slides: { perView: 3, spacing: 20, origin: "center" },
		},
	},
	defaultAnimation: {
		duration: 2000,
	},
	opacity: false,
}

export default {
	title: "Components/Slider",
}

const Templatee = (args) => <Slider {...args} />

export const Default = Templatee.bind({})
Default.args = {
	list: data,
	settings: defaultSettings,
	Arrow: Arrow,
	Template: Template,
	variant: "default",
}

export const v1 = Templatee.bind({})
v1.args = {
	list: data,
	settings: v1Settings,
	Arrow: Arrow,
	Template: Template,
	variant: "v1",
}
