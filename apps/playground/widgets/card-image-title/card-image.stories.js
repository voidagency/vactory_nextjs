import React from "react"
import { CardImageTitle } from "./card-image-title"

import expertiseImg from "../../public/img/confiance/expertise.png"
import vehiculeImg from "../../public/img/confiance/vehicule.png"
import accompagnementImg from "../../public/img/confiance/accompagnement.png"

const data2 = [
	{
		id: 1,
		image: expertiseImg,
		title: "Groupe Chaabi, l'expertise d'un groupe historique",
		url: "/about",
	},
	{
		id: 2,
		image: vehiculeImg,
		title:
			"Des véhicules passée au peigne fin pour vous offrir le meilleur de l'occasion",
		url: "/about",
	},
	{
		id: 3,
		image: accompagnementImg,
		title: "Un accompagnement personnalisé tout au long de l'opération",
		url: "/about",
	},
]

export const Default = () => <CardImageTitle data={data2} />

export default {
	title: "Dynamic Fields/Card Image",
}
