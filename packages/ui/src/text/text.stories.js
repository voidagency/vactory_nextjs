import React from "react"

import { Text } from "./text"

export default {
	title: "Primitives/Text",
	component: Text,
}

const Template = (args) => <Text {...args} />

export const base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
base.args = {
	variant: "base",
	children: "lorem ipsum dolor sit amet, consectetur adip",
}

export const small = Template.bind({})
small.args = {
	variant: "small",
	children: "lorem ipsum dolor sit amet, consectetur adip",
}

export const large = Template.bind({})
large.args = {
	variant: "large",
	children: "lorem ipsum dolor sit amet, consectetur adip",
}

export const intro = Template.bind({})
intro.args = {
	variant: "intro",
	children: "lorem ipsum dolor sit amet, consectetur adip",
}

export const quote = Template.bind({})
quote.args = {
	variant: "quote",
	children: "lorem ipsum dolor sit amet, consectetur adip",
}
