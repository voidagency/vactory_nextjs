import React from "react"
import { Card } from "../../../components/card/cardAppelOffer"
import { Button } from "@vactory/ui/button"
import ThemeToggler from "@/components/themeToggler"

const cards = [
	{
		title: "TRAVAUX DE RÉAMÉNAGEMENT DE DEUX LOCAUX DE CAPITAL AZUR",
		excerpt:
			"Appel d'offre : Travaux de réaménagement de deux locaux de Capital Azur Voir le document en téléchargement pour les détails.",
		date: "19/05/2020",
		tag: "#YTG56",
	},
	{
		title:
			"ACQUISITION ET MISE EN ŒUVRE D’UNE EXTENSION DE LA SOLUTION D’AUTOMATISATION DES TRAVAUX D’EXPLOITATION INFORMATIQUE « DOLLAR UNIVERSE",
		excerpt:
			"Appel d'offre : Travaux de réaménagement de deux locaux de Capital Azur Voir le document en téléchargement pour les détails.",
		date: "10/05/2021",
		tag: "#YTG56",
	},
	{
		title: "TRAVAUX DE RÉAMÉNAGEMENT DE DEUX LOCAUX DE CAPITAL AZUR",
		excerpt:
			"Appel d'offre : Travaux de réaménagement de deux locaux de Capital Azur Voir le document en téléchargement pour les détails.",
		date: "19/05/2020",
		tag: "#YTG56",
	},
]

const AppelOffreHeader = () => {
	return (
		<div className="w-full flex justify-between items-center mb-12">
			<h1 className="text-3xl font-semibold">Appels d'offres</h1>
			<ThemeToggler></ThemeToggler>
		</div>
	)
}

export const AppelOffreList = () => {
	return (
		<>
			<AppelOffreHeader></AppelOffreHeader>
			{cards.map((card) => {
				return (
					<Card
						key={card.title}
						title={card.title}
						excerpt={card.excerpt}
						className="p-5 pb-8 border border-gray-100 dark:border-gray-600 mb-8"
						category={
							<div className="flex items-center mb-6">
								<span className="inline mr-4 bg-blue-500 rounded-2xl leading-4 text-white text-[0.6rem] px-4 py-0.5">
									{card.tag}
								</span>
								<span className="text-gray-400 text-sm">{card.date}</span>
							</div>
						}
						urlContent={
							<Button
								size={"large"}
								outline={true}
								outlineVariant={"primary"}
								className="mt-10 px-10 uppercase shadow-md font-semibold"
							>
								télécharger le dossier
							</Button>
						}
						url="/about"
						variant={"appelOffre"}
					/>
				)
			})}
		</>
	)
}

export default AppelOffreList
