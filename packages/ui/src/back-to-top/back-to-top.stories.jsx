import React from "react"
import { BackToTop } from "./back-to-top.container"
import { Icon } from "../icon/icon"
import { PlaceholderSections } from "../_helpers/section"

export const Default = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<BackToTop />
		</div>
	)
}

export const CustomIcon = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<BackToTop icon={<Icon id="chevron-double-up-solid" width="50" height="50" />} />
		</div>
	)
}

export const IconVariant2 = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<BackToTop variant="v2" />
		</div>
	)
}

export default {
	title: "Components/Back To Top",
}
