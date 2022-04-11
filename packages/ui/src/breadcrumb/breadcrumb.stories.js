import React from "react"
import { Breadcrumb } from "./breadcrumb"
import { Icon } from "../icon/icon"

const pages = [
	{ id: "1", name: "Projects", href: "#", current: false },
	{ id: "2", name: "Project Nero", href: "#", current: true },
]

export const Default = ({}) => {
	return (
		<div className="relative">
			<Breadcrumb pages={pages} homeUrl="/" />
		</div>
	)
}

export const Variant2 = ({}) => {
	return (
		<div className="relative">
			<Breadcrumb pages={pages} variant="secondary" />
		</div>
	)
}

export default {
	title: "Components/Breadcrumb",
}
