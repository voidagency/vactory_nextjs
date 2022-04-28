import React, { useState } from "react"
import { Button } from "@vactory/ui/button"
import { Select } from "@vactory/ui/select"

const cities = [
	{
		value: "1",
		content: "Agadir oufla",
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

const contractType = [
	{
		value: "1",
		content: "Intern",
	},
	{
		value: "2",
		content: "CDD",
	},
	{
		value: "3",
		content: "CDI",
	},
]

const professions = [
	{ value: "1", content: "Achats, Sécurité, Gestion de Moyens et Services Généraux" },
	{ value: "2", content: "Finance, Comptabilité et contrôle de Gestion" },
	{ value: "3", content: "Rédacteur" },
	{ value: "4", content: "SI & Data" },
]
export const JobFilter = () => {
	const [selectedCities, setSelectedCities] = useState(cities[0])
	const [selectedContractType, setSelectedContractType] = useState(contractType[0])
	const [selectedProfessions, setSelectedProfessions] = useState(professions[0])
	return (
		<div className="flex lg:flex-nowrap flex-wrap gap-x-4 gap-y-4 mb-12">
			<div className="w-full flex md:flex-nowrap flex-wrap gap-x-4 gap-y-4">
				<Select
					list={cities}
					variant="filterSelect"
					selected={selectedCities}
					setSelected={setSelectedCities}
					className="grow"
				/>
				<Select
					list={contractType}
					variant="filterSelect"
					selected={selectedContractType}
					setSelected={setSelectedContractType}
					className="grow"
				/>
				<Select
					list={professions}
					variant="filterSelect"
					selected={selectedProfessions}
					setSelected={setSelectedProfessions}
					className="grow"
				/>
			</div>
			<div className="w-full flex md:flex-nowrap flex-wrap gap-x-4 gap-y-4">
				<Button
					variant={"primary"}
					size={"normal"}
					className="grow uppercase shadow-md font-semibold"
				>
					Appliquer
				</Button>
				<Button
					variant={"secondary"}
					size={"normal"}
					className="grow uppercase shadow-md text-white font-semibold"
				>
					Reset
				</Button>
			</div>
		</div>
	)
}

export default JobFilter
