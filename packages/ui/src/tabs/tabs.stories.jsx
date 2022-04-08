import React from "react"
import { Tabs } from "./tabs"

export default {
	title: "Components/tabs",
}

const TabsContent = [
	{
		id: 1,
		title: "Element 1",
		content: (
			<p>
				Tabs 1 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
				consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
				consectetur
			</p>
		),
	},
	{
		id: 1,
		title: "Element 2",
		content: (
			<p>
				Tabs 2 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
				consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
				consectetur
			</p>
		),
	},
	{
		id: 1,
		title: "Element 3",
		content: (
			<p>
				Tabs 3 lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
				consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
				consectetur
			</p>
		),
	},
]

const Template = (args) => {
	return <Tabs {...args} />
}

export const tabs = Template.bind({})
tabs.args = {
	variant: "default",
	nodes: TabsContent,
}

export const Secondary = Template.bind({})
Secondary.args = {
	variant: "secondary",
	nodes: TabsContent,
}
