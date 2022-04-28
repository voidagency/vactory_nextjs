import React from "react"
import { Button } from "@vactory/ui/button"
import { Select } from "@vactory/ui/select"

export const InsightFilter = ({
	terms,
	ordre,
	selectedCategory,
	setSelectedcategory,
	selectedOrdre,
	setSelectedOrdre,
}) => {
	return (
		<div className="flex lg:flex-nowrap flex-wrap grid md:grid-cols-3 gap-x-4 gap-y-4 mb-12 mx-4">
			<div className="w-full flex md:flex-nowrap flex-wrap col-span-2 gap-x-4 gap-y-4">
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
			<div className="w-full flex md:flex-nowrap flex-wrap  gap-x-4 gap-y-4">
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
					REINITIALISER
				</Button>
			</div>
		</div>
	)
}

export default InsightFilter
