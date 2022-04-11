import React from "react"
import { Accordion } from "./accordion"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/accordion",
	component: Accordion,
}

const accordionContent = [
	{
		id: "1",
		button: <span>Element 1</span>,
		panel: <p> element 1 lorem ipsum dolor sit amet, consectetur</p>,
	},
	{
		id: "2",
		button: <span>Element 2</span>,
		panel: <p>Element 2lorem ipsum dolor sit amet, consectetur</p>,
	},
	{
		id: "3",
		button: <span>Element 3</span>,
		panel: <p>Element 3 lorem ipsum dolor sit amet, consectetur</p>,
	},
]

const Template = (args) => {
	return <Accordion {...args} />
}

export const accordion = Template.bind({})
accordion.args = {
	variant: "default",
	nodes: accordionContent,
}

export const accordionV2 = Template.bind({})
accordionV2.args = {
	variant: "secondary",
	nodes: accordionContent,
}
