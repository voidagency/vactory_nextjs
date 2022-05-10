import React from "react"
import { Button } from "@vactory/ui/button"
import { Select } from "@vactory/ui/select"
import { Container } from "@vactory/ui/container"

export const InsightFilter = ({
	terms,
	ordre,
	selectedCategory,
	setSelectedcategory,
	selectedOrdre,
	setSelectedOrdre,
}) => {
	return (
		<Container className=" lg:flex-row flex-wrap flex-col grid md:grid-cols-3 gap-x-2 gap-y-4 mb-12">
			<div className="w-full flex md:flex-nowrap flex-wrap col-span-2 gap-x-4 gap-y-4 px-4">
				<Select
					list={terms}
					variant="filterSelect"
					className="grow"
					selected={selectedCategory}
					setSelected={setSelectedcategory}
				/>
				<Select
					list={ordre}
					variant="filterSelect"
					className="grow"
					selected={selectedOrdre}
					setSelected={setSelectedOrdre}
				/>
			</div>
			<div className="w-full flex md:flex-nowrap flex-wrap  gap-x-4 gap-y-4 px-4">
				<Button
					variant={"primary"}
					size={"normal"}
					className="grow uppercase shadow-md font-semibold bg-blue-1000"
				>
					Appliquer
				</Button>
				<Button
					variant={"secondary"}
					size={"normal"}
					className="grow uppercase shadow-md text-white font-semibold bg-gray-400"
				>
					REINITIALISER
				</Button>
			</div>
		</Container>
	)
}

export default InsightFilter
