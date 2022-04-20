import React from "react"
import { Card } from "@vactory/ui/card"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"

import { Slider } from "@vactory/ui/slider"
import slide from "@vactory/ui/slide"

import { cards } from "./data"

export const MarqueSlider = ({}) => {
	return (
		<Container className="py-14">
			<Heading level="2" className="text-center mb-9">
				Offres populaires
			</Heading>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{cards.map((card) => {
					return <Card key={card.id} variant="marque" {...card} />
				})}
			</div>
		</Container>
	)
}

export default MarqueSlider
