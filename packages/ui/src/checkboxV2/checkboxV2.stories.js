import CheckboxInput from "./checkboxV2"

const Template = (args) => (
	<div className="max-w-lg h-screen mx-auto flex items-center justify-center">
		<CheckboxInput {...args} />
	</div>
)

export const CheckboxStories = Template.bind({})

CheckboxStories.argTypes = {
	disabled: {
		defaultValue: false,
		control: { type: "boolean" },
	},
	checked: {
		defaultValue: true,
		control: { type: "boolean" },
	},
	label: {
		defaultValue: "Label",
		control: { type: "text" },
	},
}

export default {
	title: "Primitives/CheckboxV2",
}
