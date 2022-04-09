import React from "react"
import { PlaceholderSections } from "../_helpers/section"
import { Toggle } from "./toggle"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export const Default = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Toggle />
		</div>
	)
}

export default {
	title: "primitives/toggle",
}
