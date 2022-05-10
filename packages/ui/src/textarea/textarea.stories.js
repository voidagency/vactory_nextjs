import { Textarea } from "./textarea"

const Template = (args) => {
	return (
		<div className="max-w-lg h-screen mx-auto flex items-center justify-center">
			<Textarea {...args} />
		</div>
	)
}

export const TextareaStories = Template.bind({})

TextareaStories.argTypes = {
	variant: {
		defaultValue: "default",
		control: { type: "select" },
		options: ["default", "rounded"],
	},
	placeholder: {
		defaultValue: "Placeholder",
		control: { type: "text" },
	},
	rows: {
		defaultValue: "default",
		control: { type: "number" },
	},
	resize: {
		defaultValue: true,
		control: { type: "boolean" },
	},
	showCounter: {
		defaultValue: false,
		control: { type: "boolean" },
	},
	maxLength: {
		defaultValue: 50,
		control: { type: "number" },
	},
}

export default {
	title: "Primitives/textarea",
}
