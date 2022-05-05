import React, { useState } from "react"
import InsightFilter from "../../components/insight/insight-filter"
import InsightList from "../../components/insight/insight-list"
import { Container } from "@vactory/ui/container"
import { data, terms, ordre } from "./data"

export const InsightsWidget = () => {
	const [selectedCategory, setSelectedCategory] = useState(terms[1])
	const [selectedOrdre, setSelectedOrdre] = useState(ordre[1])
	const [filtredList, setFiltredList] = useState(data)

	return (
		<Container layout="full" className="py-10 bg-gray-1000">
			<InsightFilter
				ordre={ordre}
				terms={terms}
				selectedCategory={selectedCategory}
				setSelectedcategory={setSelectedCategory}
				selectedOrdre={selectedOrdre}
				setSelectedOrdre={setSelectedOrdre}
			/>
			<InsightList insights={filtredList} />
		</Container>
	)
}

export default InsightsWidget
