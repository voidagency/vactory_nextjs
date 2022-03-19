import React from "react"
import { Notification } from "./notification"
import { PlaceholderSections } from "../_helpers/section"

export const Default = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Notification />
		</div>
	)
}

export default {
	title: "Components/Notifications",
}
