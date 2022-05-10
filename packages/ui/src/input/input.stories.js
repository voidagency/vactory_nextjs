import React from "react"
import { Input } from "./input"
import { Icon } from "@vactory/ui/icon"
import { divide } from "lodash"

const Template = (args) => {
	const prefix = args.prefix === null ? null : <Icon id="user" className="w-5 h-5" />
	const sufix =
		args.sufix === null ? null : <Icon id="question-mark-circle" className="w-5 h-5" />
	return (
		<div className="max-w-lg h-screen mx-auto flex items-center justify-center">
			<Input {...args} prefix={prefix} sufix={sufix}></Input>
		</div>
	)
}

export const InputText = Template.bind({})

InputText.argTypes = {
	variant: {
		defaultValue: "default",
		control: { type: "select" },
		options: ["default", "rounded"],
	},
	label: {
		defaultValue: "Label",
		control: { type: "text" },
	},
	placeholder: {
		defaultValue: "Placeholder",
		control: { type: "text" },
	},
	description: {
		defaultValue: "This could be the description of your input",
		control: { type: "text" },
	},
	hasError: {
		defaultValue: false,
		control: { type: "boolean" },
	},
	errorMessage: {
		defaultValue: "This could be the error message of your input",
		control: { type: "text" },
	},
	prefix: {
		defaultValue: null,
		control: { type: "radio" },
		options: {
			null: null,
			icon: "prefix",
		},
	},
	sufix: {
		defaultValue: null,
		control: { type: "radio" },
		options: {
			null: null,
			icon: "sufix",
		},
	},
}

export const InputTextWithAddons = Template.bind({})

InputTextWithAddons.args = {
	addonBefore: <span className="mx-3 truncate">https://</span>,
	addonAfter: <Icon id="user" className="w-5 h-5 mx-3" />,
}

InputTextWithAddons.argTypes = {
	...InputText.argTypes,
}

export default {
	title: "Primitives/Input",
}
