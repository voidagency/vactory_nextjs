import React from "react"

import { Heading } from "../heading"

export default {
	title: "Primitives/Headings",
	component: Heading,
}

const Template = (args) => <Heading {...args} />

export const h1 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
h1.args = {
	level: 1,
	children: "This is the h1",
}

export const h2 = Template.bind({})
h2.args = {
	level: 2,
	children: "This is the h2",
}

export const h3 = Template.bind({})
h3.args = {
	level: 3,
	children: "This is the h3",
}

export const h4 = Template.bind({})
h4.args = {
	level: 4,
	children: "This is the h4",
}

export const h5 = Template.bind({})
h5.args = {
	level: 5,
	children: "This is the h5",
}

export const h6 = Template.bind({})
h6.args = {
	level: 6,
	children: "This is the h6",
}
