import React from "react"
import { Link } from "./link"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Primitives/Links",
	component: Link,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
	return <Link {...args} />
}

export const LinkDefault = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LinkDefault.args = {
	layout: "default",
	className: "h-[150px] bg-red-300",
	children: <p>Content</p>,
}

export const Permalink = Template.bind({})
Permalink.args = {
	variant: "permalink",
	children: "This is permalink",
}
