import React from "react"
import { Icon } from "@vactory/ui/icon"
import { Select } from "./select"

export default {
	title: "Primitives/select",
	component: Select,
}

const listItems = [
	{
		value: "1",
		content: "Agadir oufla",
	},
	{
		value: "2",
		content: "Casa blanca",
	},
	{
		value: "3",
		content: "Paris",
	},
]

const Template = (args) => <Select {...args} />
export const Example = Template.bind({})
Example.args = {
	list: listItems,
	selected: "Paris",
	chevronDownIcon: <Icon id="chevron-down" width="15" height="15" />,
	checkIcon: <Icon id="check-solid" width="15" height="15" />,
}

export const V2 = Template.bind({})
V2.args = {
	variant: "secondary",
	list: listItems,
	selected: "Paris",
}
