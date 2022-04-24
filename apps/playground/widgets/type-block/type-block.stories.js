import React from "react"
import { TypeBlock } from "./type-block"

import voitureImg from "../../public/img/types/voitures.png"
import motosImg from "../../public/img/types/motos.png"
import trucksImg from "../../public/img/types/trucks.png"

const data = [
	{
		id: 1,
		title: "Voitures",
		url: "/",
		urlTitle: "découvrir",
		image: voitureImg,
	},
	{
		id: 2,
		title: "Motos",
		url: "/",
		urlTitle: "découvrir",
		image: motosImg,
	},
	{
		id: 3,
		title: "Trucks",
		url: "/",
		urlTitle: "découvrir",
		image: trucksImg,
	},
]

export const Default = () => <TypeBlock data={data} />

export default {
	title: "Dynamic Fields/Type blocks",
}
