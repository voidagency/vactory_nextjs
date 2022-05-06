import React from "react"
import { CardsSoumissions } from "./cards-soumissions"

import hundaiImg from "../../public/img/offres/hundai.png"
import audiImg from "../../public/img/offres/audi.png"
import citroenImg from "../../public/img/offres/citroen.png"

export const data = {
	title: "Récapitulatif des soumissions en cours",
	amountTotaltitle: "Montant total en DH TTC",
	amountTotal: "981 200 DH",
	url: "/",
	urlTitle: "Annuler",
	url2: "/",
	url2Title: "Confirmer",
	items: [
		{
			id: 1,
			logo: hundaiImg,
			reference: "CL2542AZ",
			title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
			amount: "300 000 DH TTC",
			date: "15 décembre 2021 à 10h",
			url: "/",
			urlTitle: "Modifier",
			deleteUrl: "/",
			deleteTitle: "Retirer",
		},
		{
			id: 2,
			logo: audiImg,
			reference: "CL2542AZ",
			title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
			amount: "300 000 DH TTC",
			date: "15 décembre 2021 à 10h",
			url: "/",
			urlTitle: "Modifier",
			deleteUrl: "/",
			deleteTitle: "Retirer",
		},
		{
			id: 3,
			logo: citroenImg,
			reference: "CL2542AZ",
			title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
			amount: "300 000 DH TTC",
			date: "15 décembre 2021 à 10h",
			url: "/",
			urlTitle: "Modifier",
			deleteUrl: "/",
			deleteTitle: "Retirer",
		},
	],
}

export const Default = () => (
	<CardsSoumissions data={data} url="/" urlTitle="En savoir plus" />
)

export default {
	title: "Dynamic Fields/Cards Soumissions",
}
