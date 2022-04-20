import React from "react"

import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

import { Container } from "@vactory/ui/container"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { Card } from "@vactory/ui/card"
import { Button } from "@vactory/ui/button"

import { theme } from "../theme/theme"

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

const AppelsOffres = () => {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<Container className="py-12">
				{cards.map((card) => {
					return (
						<Card
							title={card.title}
							excerpt={card.excerpt}
							className="p-5 pb-8 border border-slate-100 mb-8"
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
						/>
					)
				})}
			</Container>
			<Footer />
		</AppWrapper>
	)
}

export default AppelsOffres
