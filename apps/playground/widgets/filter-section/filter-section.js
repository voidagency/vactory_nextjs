import React from "react"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { Select } from "@vactory/ui/select"
import { Button } from "@vactory/ui/button"

export const FilterSection = () => {
	const listItems = [
		{
			value: "1",
			content: "Marque",
		},
		{
			value: "2",
			content: "Casa blanca",
		},
		{
			value: "3",
			content: "Paris",
		},
	]
	return (
		<Container layout="full" className="py-14">
			<Container layout="small" className="bg-[#F9FAFB] py-[42px] px-[53px]">
				<div className="mb-[22px]">
					<Heading level="4" className="mb-[22px] text-gray-900">
						Trouver une voiture
					</Heading>
					<Text className="text-gray-400 max-w-[336px]" varinat="body1">
						Accédez en quelques clics à une large choix <br /> de véhicules, quleque soit
						votre besoin
					</Text>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Select className="space-x-6" list={listItems} />
					<Select className="space-x-6" list={listItems} />
					<Select className="space-x-6" list={listItems} />

					<Select className="space-x-6" list={listItems} />
					<Select className="space-x-6" list={listItems} />
					<Select className="space-x-6" list={listItems} />
				</div>
				<div className="text-right rtl:text-left mt-10">
					<Button variant="primary" type="submit" className="text-white w-32">
						Valider
					</Button>
				</div>
			</Container>
		</Container>
	)
}
