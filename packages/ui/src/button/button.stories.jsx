import React from "react"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"

const Template = (args) => {
	const icon = args.icon === null ? null : <Icon id="check" className="w-5 h-5" />
	return <Button {...args} icon={icon}></Button>
}

export const ButtonStories = Template.bind({})

ButtonStories.argTypes = {
	variant: {
		defaultValue: "primary",
		control: { type: "select" },
		options: ["primary", "secondary", "danger"],
	},
	children: {
		defaultValue: "Button",
		control: { type: "text" },
	},
	className: {
		defaultValue: "",
		control: { type: "text" },
	},
	size: {
		defaultValue: "normal",
		control: { type: "select" },
		options: ["small", "normal", "large", "xlarge"],
	},
	disabled: {
		defaultValue: false,
		options: [false, true],
		control: { type: "boolean" },
	},
	outline: {
		defaultValue: false,
		options: [false, true],
		control: { type: "boolean" },
	},
	pill: {
		defaultValue: false,
		options: [false, true],
		control: { type: "boolean" },
	},
	icon: {
		defaultValue: null,
		control: { type: "radio" },
		options: {
			null: null,
			icon: "icon",
		},
	},
}

export default {
	title: "Primitives/Button",
}
