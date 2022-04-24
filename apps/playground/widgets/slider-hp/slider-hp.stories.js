import React from "react"
import { SliderHp } from "./slider-hp"

const data = [
	{
		id: 1,
		title: "Bienvenue sur votre nouveau site de véhicules d'occasion en ligne",
		description:
			"Achetez ans vous déplacer des voitures d'occasion expertisés par nos professionnels",
		image: "https://loremflickr.com/1200/800",
	},
	{
		id: 2,
		title: "Bienvenue sur votre nouveau site de véhicules d'occasion en ligne",
		description:
			"Achetez ans vous déplacer des voitures d'occasion expertisés par nos professionnels",
		image: "https://loremflickr.com/1200/800",
	},
	{
		id: 3,
		title: "Bienvenue sur votre nouveau site de véhicules d'occasion en ligne",
		description:
			"Achetez ans vous déplacer des voitures d'occasion expertisés par nos professionnels",
		image: "https://loremflickr.com/1200/800",
	},
	{
		id: 4,
		title: "Bienvenue sur votre nouveau site de véhicules d'occasion en ligne",
		description:
			"Achetez ans vous déplacer des voitures d'occasion expertisés par nos professionnels",
		image: "https://loremflickr.com/1200/800",
	},
]

export const Default = () => <SliderHp data={data} />

export default {
	title: "Dynamic Fields/Slider HP",
}
