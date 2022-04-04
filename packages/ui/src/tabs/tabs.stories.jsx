import React from "react"
import { Tabs } from "./tabs"
import { PlaceholderSections } from "../_helpers/section"

export const Default = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Tabs />
		</div>
	)
}

export default {
	title: "Components/tabs",
}
