import React from "react"
import { Card } from "../../../components/card/cardAppelOffer"
import { Button } from "@vactory/ui/button"
import { cards } from "./data"

export const AppelOffreList = () => {
	return (
		<>
			{cards.map((card) => {
				return (
					<Card
						title={card.title}
						excerpt={card.excerpt}
						className="p-5 pb-8 border border-slate-100 mb-8 group"
						category={
							<div className="flex items-center mb-6">
								<span className="inline mr-4 bg-blue-1200 rounded-2xl leading-4 text-white text-[0.6rem] px-4 py-0.5">
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
						variant={"cardAppelOffre"}
					/>
				)
			})}
		</>
	)
}

export default AppelOffreList
