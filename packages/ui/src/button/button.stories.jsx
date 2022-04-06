import React from "react"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Primitives/Button",
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
	return <Button {...args} />
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	variant: "primary",
	children: "Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: "Secondary",
	variant: "secondary",
}

export const Danger = Template.bind({})
Danger.args = {
	children: "Danger",
	variant: "danger",
}

export const Large = Template.bind({})
Large.args = {
	size: "large",
	children: "Primary",
}

export const OutlinePrimary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OutlinePrimary.args = {
	variant: "primary",
	children: "Primary Outline",
	outline: true,
}

export const Small = Template.bind({})
Small.args = {
	size: "small",
	children: "Small button",
}

export const Rounded = Template.bind({})
Rounded.args = {
	size: "rounded",
	pill: true,
	icon: <Icon id="arrow-narrow-left-solid" width="15" height="15" />,
}

export const Pill = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pill.args = {
	pill: true,
	children: "Rounded button",
}

export const ButtonWithIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonWithIcon.args = {
	variant: "primary",
	children: "En savoir plus",
	icon: <Icon id="information-circle" width="20" height="20" />,
}

export const ButtonIcon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonIcon.args = {
	variant: "primary",
	icon: <Icon id="information-circle" width="20" height="20" />,
}
