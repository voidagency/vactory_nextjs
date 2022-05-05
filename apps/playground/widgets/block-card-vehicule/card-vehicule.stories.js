import React from "react"
import { BlockCardVehicule } from "./block-card-vehicule"

import hundaiImg from "../../public/img/offres/hundai.png"
import audiImg from "../../public/img/offres/audi.png"
import citroenImg from "../../public/img/offres/citroen.png"

const data = [
	{
		id: 1,
		logo: hundaiImg,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		url: "/",
		urlTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
	{
		id: 2,
		logo: audiImg,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		url: "/",
		urlTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
	{
		id: 3,
		logo: citroenImg,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		url: "/",
		urlTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
]

const data2 = [
	{
		id: 1,
		logo: hundaiImg,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		amount: "300 000 DH TTC",
		date: "15 décembre 2021 à 10h",
		url: "/",
		urlTitle: "Ajouter au panier",
		deleteUrl: "/",
		deleteTitle: "Voir Détails",
	},
	{
		id: 2,
		logo: audiImg,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		amount: "300 000 DH TTC",
		date: "15 décembre 2021 à 10h",
		url: "/",
		urlTitle: "Ajouter au panier",
		deleteUrl: "/",
		deleteTitle: "Voir Détails",
	},
	{
		id: 3,
		logo: citroenImg,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		amount: "300 000 DH TTC",
		date: "15 décembre 2021 à 10h",
		url: "/",
		urlTitle: "Ajouter au panier",
		deleteUrl: "/",
		deleteTitle: "Voir Détails",
	},
]

export const Default = () => (
	<BlockCardVehicule data={data} url="/" urlTitle="En savoir plus" />
)

export const SoumissionsCard = () => (
	<BlockCardVehicule data={data2} url="/" urlTitle="En savoir plus" />
)

export default {
	title: "Dynamic Fields/Card Vehicule",
}
