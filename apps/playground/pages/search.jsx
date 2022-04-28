import { Header } from "../components/chaibi-header/chaibi-header"
import { FilterSection } from "../widgets/filter-section/filter-section"
import { CardVehicule } from "../widgets/card-vehicule/card-vehicule"
import { Footer } from "../widgets/footer/footer"
import { Banner } from "../widgets/banner/banner"

import hundaiImg from "../public/img/offres/hundai.png"
import audiImg from "../public/img/offres/audi.png"
import citroenImg from "../public/img/offres/citroen.png"

export default function Search() {
	return (
		<div>
			<Header />
			<Banner />
			<FilterSection />
			<CardVehicule data={cardVehiculeData} url="/" urlTitle="Afficher Plus" />
			<Footer />
		</div>
	)
}

const cardVehiculeData = [
	{
		id: 1,
		logo: hundaiImg.src,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		panierUrl: "/",
		panierTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
	{
		id: 2,
		logo: audiImg.src,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		panierUrl: "/",
		panierTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
	{
		id: 3,
		logo: citroenImg.src,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		panierUrl: "/",
		panierTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
	{
		id: 4,
		logo: hundaiImg.src,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		panierUrl: "/",
		panierTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
	{
		id: 5,
		logo: audiImg.src,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		panierUrl: "/",
		panierTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
	{
		id: 6,
		logo: citroenImg.src,
		reference: "CL2542AZ",
		title: "DACIA DOKKER VP Ambiance Glace MY 1,5 dCi 85 ch 1PLC",
		vitesse: "Manuelle",
		km: "86 583",
		carburant: "Diesel",
		date: "15 décembre 2021 à 10h",
		panierUrl: "/",
		panierTitle: "Ajouter au panier",
		readMoreUrl: "/",
		readMoreTitle: "Voir Détails",
	},
]
