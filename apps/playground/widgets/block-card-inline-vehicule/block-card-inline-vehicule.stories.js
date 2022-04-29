import React from "react"
import { BlockCardInlineVehicule } from "./block-card-inline-vehicule"
import audiImg from "../../public/img/offres/audi.png"

const data = {
	logo: audiImg,
	title: "AUDI Q2 PREMIUM 2,0L TDI 143",
	reference: "CL2542AZ",
	date: "05 Avril 2022 à 10h00",
	url: "/",
	urlTitle: "Ajouter au panier",
}

export const Default = () => <BlockCardInlineVehicule data={data} />

export default {
	title: "Dynamic Fields/Block card inline vehicule",
}
