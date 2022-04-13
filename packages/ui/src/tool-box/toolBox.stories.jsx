import React from "react"
import { ToolBox, MediaBox } from "./toolBox"
import { PlaceholderSections } from "../_helpers/section"

export const Default = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<div className="fixed right-0 w-48 bottom-36">
				<ToolBox />
			</div>
		</div>
	)
}
export const Media = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<div className="fixed left-8 w-10 bottom-32">
				<MediaBox />
			</div>
		</div>
	)
}

export default {
	title: "Components/ToolBox",
}
