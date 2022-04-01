import React from "react"

import { Select } from "./select"

export default {
	title: "Primitives/select",
	component: Select,
}

const listItems = [
	{
		value: "Agadir",
		content: "Agadir",
	},
	{
		value: "Casablanca",
		content: "Casablana",
	},
	{
		value: "Paris",
		content: "Paris",
	},
]

const Template = (args) => <Select {...args} />
export const Example = Template.bind({})
Example.args = {
	list: listItems,
	selected: "Paris",
}
