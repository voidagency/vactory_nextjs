import React from "react"
import { ToolBox } from "./toolBox"
import { PlaceholderSections } from "../_helpers/section"

export default {
	title: "Components/ToolBox",
}

const tools = [
	{
		name: "OUVRIR UN COMPTE",
		href: "#",
		icon: "",
	},
	{
		name: "RECLAMATION",
		href: "#",
		icon: "",
	},
	{
		name: "FAQ",
		href: "#",
		icon: "",
	},
]

const Template = (args) => <ToolBox {...args} />

export const Default = Template.bind({})
Default.args = {
	list: tools,
}
