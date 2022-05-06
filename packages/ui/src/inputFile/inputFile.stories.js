import { InputFile } from "./inputFile"
import { Icon } from "@vactory/ui/icon"
import { InputText } from "../input/input.stories"

const Template = (args) => {
	const prefix = args.prefix === null ? null : <Icon id="user" width="15" height="15" />
	const sufix =
		args.sufix === null ? null : <Icon id="question-mark-circle" width="15" height="15" />
	return (
		<div className="max-w-lg h-screen mx-auto flex items-center justify-center">
			<InputFile {...args} prefix={prefix} sufix={sufix}></InputFile>
		</div>
	)
}

export const InputFileStories = Template.bind({})

InputFileStories.argTypes = {
	...InputText.argTypes,
}

export default {
	title: "Primitives/InputFile",
}
