import InputRange from "./inputRange"

const Template = (args) => (
	<div className="max-w-lg h-screen mx-auto flex items-center justify-center">
		<InputRange {...args} />
	</div>
)

export const InputRangeStories = Template.bind({})

InputRangeStories.argTypes = {
	thumb: {
		defaultValue: "defaultThumb",
		control: { type: "select" },
		options: ["defaultThumb", "roundedThumb"],
	},
	min: {
		defaultValue: "0",
		control: { type: "text" },
	},
	max: {
		defaultValue: "100",
		control: { type: "text" },
	},
	label: {
		defaultValue: "Label",
		control: { type: "text" },
	},
}

export default {
	title: "Primitives/inputRange",
}
