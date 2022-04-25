import React from "react"
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
	return (
		<div class="flex lg:flex-nowrap flex-wrap gap-x-4 gap-y-4 mb-12">
			<div class="w-full flex md:flex-nowrap flex-wrap gap-x-4 gap-y-4">
				<Select list={cities} variant="filterSelect" className="grow" />
				<Select list={contractType} variant="filterSelect" className="grow" />
				<Select list={professions} variant="filterSelect" className="grow" />
			</div>
			<div class="w-full flex md:flex-nowrap flex-wrap gap-x-4 gap-y-4">
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
