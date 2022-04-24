import React from "react"
import { CardWithPicto } from "./card-with-picto"

import personImg from "../../public/img/person.png"
import saveMoney from "../../public/img/save-money.png"
import soumissionImg from "../../public/img/acknowledgement.png"
import recuperImg from "../../public/img/_x30_72---Rental-Car.png"

const cards = [
	{
		id: "1",
		icon: personImg,
		iconalt: "image alt",
		title: "S'inscrire",
		excerpt:
			"Créez un compte sur l'espace privé du site pour avoir accés à la soumission",
	},
	{
		id: "2",
		icon: saveMoney,
		iconalt: "image alt",
		title: "Déposer",
		excerpt:
			" Payer votre caution pour valider votre compte et soumissioner autant de véhicules que vous souhaitez",
	},
	{
		id: "3",
		icon: soumissionImg,
		iconalt: "image alt",
		title: "Soumissioner",
		excerpt:
			"Choisir le ou les véhicules correspondant à vos critères et proposez un prix",
	},
	{
		id: "4",
		icon: recuperImg,
		iconalt: "image alt",
		title: "Récupérer",
		excerpt: "Allez chercher votre véhicule dès la réception d’une réponse favorable",
	},
]

export const Default = () => (
	<CardWithPicto title="This is title of section" items={cards} />
)

export default {
	title: "Dynamic Fields/Card With picto",
}
