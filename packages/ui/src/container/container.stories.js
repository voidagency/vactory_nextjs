import React from "react"
import { Container } from "./container"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Primitives/Container",
	component: Container,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
	return <Container {...args} />
}

export const ContainerDefault = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContainerDefault.args = {
	layout: "default",
	className: "h-[150px] bg-red-300",
	children: <p>Content</p>,
}

export const ContainerFluid = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContainerFluid.args = {
	layout: "fluid",
	className: "h-[150px] bg-red-300",
	children: <p>Content</p>,
}

export const ContainerFull = Template.bind({})
ContainerFull.args = {
	layout: "full",
	className: "h-[150px] bg-red-300",
	children: <p>Content</p>,
}
