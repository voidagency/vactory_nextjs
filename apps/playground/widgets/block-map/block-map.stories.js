import React from "react"
import { BlockMap } from "./block-map"

import logoLld from "../../public/img/logo-vehicule.png"

import mapImg from "../../public/img/map-footer/map.png"

const Content = () => (
	<div className="text-[16px] leading-[24px] text-gray-500">
		<p>
			Prenez rendez-vous en appelant le
			<a href="#" className="text-primary-500">
				0520-151151
			</a>
			ou en envoyant un mail à
			<a href="#" className="text-primary-500">
				info@chaibilld.ma
			</a>
			et venez visiter notre dépôt pour découvrir tous les véhicules disponibles.
		</p>
	</div>
)

const data = {
	title: "Visitez notre showroom",
	content: <Content />,
	image: mapImg,
	image_alt: "image alt",
	meeting_title: "Prenez rendez-vous",
	tel: "0520-151151",
	email: "info@chaabilld.ma",
	adressTitle: "Visitez notre dépôt",
	adress: "Chaabi LLD - 19 Rue des Papillons, Casablanca 20410",
}

export const Default = () => <BlockMap data={data} chaibiLogo={logoLld} />

export default {
	title: "Dynamic Fields/Block map",
}
