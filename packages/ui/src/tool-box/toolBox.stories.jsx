import React from "react"
import { ToolBox } from "./toolBox"
import { Icon } from "@vactory/ui/icon"
import { PlaceholderSections } from "../_helpers/section"

export default {
	title: "Components/ToolBox",
}

const items = [
	{
		id: 0,
		title: "et si on discutais",
		href: "#",
		icon: <Icon id="annotation-solid" width="30" height="30" />,
	},
	{
		id: 1,
		title: "RECLAMATION",
		href: "#",
		icon: <Icon id="exclamation-circle-solid" width="30" height="30" />,
	},
	{
		id: 2,
		title: "facebook",
		href: "#",
		icon: <Icon id="facebook-solid" width="30" height="30" />,
	},
	{
		id: 3,
		title: "location",
		href: "#",
		icon: <Icon id="location-marker-solid" width="30" height="30" />,
	},
]

const tools = [
	{
		id: 0,
		title: "OUVRIR UN COMPTE",
		href: "#",
		icon: "",
	},
	{
		id: 1,
		title: "RECLAMATION",
		href: "#",
		icon: "",
	},
	{
		id: 2,
		title: "FAQ",
		href: "#",
		icon: "",
	},
]

const Template = (args) => <ToolBox {...args} />

export const Default = Template.bind({})
Default.args = {
	list: tools,
	variant: "default",
}

export const AnimatedBox = Template.bind({})
AnimatedBox.args = {
	list: items,
	variant: "animatedBox",
}
