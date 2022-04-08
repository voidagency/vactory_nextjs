import React from "react"
import { Icon } from "@vactory/ui/icon"
import { Select } from "./select"

export default {
	title: "Primitives/select",
	component: Select,
}

const listItems = [
	{
		value: "Agadir",
	},
	{
		value: "Casablanca",
	},
	{
		value: "Paris",
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
	variant: "v2",
	list: listItems,
	selected: "Paris",
}
