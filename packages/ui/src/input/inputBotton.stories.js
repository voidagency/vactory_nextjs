import InputButton from "./inputButton"
import { InputText } from "./input.stories"
import { Icon } from "@vactory/ui/icon"

const Template = (args) => {
	const prefix = args.prefix === null ? null : <Icon id="user" className="w-5 h-5" />
	const sufix =
		args.sufix === null ? null : <Icon id="question-mark-circle" className="w-5 h-5" />
	return (
		<div className="max-w-lg h-screen mx-auto flex items-center justify-center">
			<InputButton
				buttonClasses={"truncate h-full"}
				{...args}
				prefix={prefix}
				sufix={sufix}
			></InputButton>
		</div>
	)
}

export const InputButtonStories = Template.bind({})

InputButtonStories.argTypes = {
	...InputText.argTypes,
	buttonContent: {
		defaultValue: "Search",
		control: { type: "text" },
	},
}

export default {
	title: "Primitives/inputButton",
}
