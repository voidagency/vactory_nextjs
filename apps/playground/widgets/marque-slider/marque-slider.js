import React from "react"
import { Card } from "@vactory/ui/card"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"

import { cards } from "./data"

export const MarqueSlider = ({ data = cards }) => {
	return (
		<Container className="py-14">
			<Heading level="3" className="text-center mb-9">
				Offres populaires
			</Heading>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{data.map((card) => {
					return <Card key={card.id} variant="marque" {...card} />
				})}
			</div>
		</Container>
	)
}
