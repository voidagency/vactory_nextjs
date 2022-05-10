import { InputPassword } from "./inputPassword"
import { Icon } from "@vactory/ui/icon"
import { InputText } from "./input.stories"

var inputTextArgTypesClone = JSON.parse(JSON.stringify(InputText.argTypes))

delete inputTextArgTypesClone.sufix

const Template = (args) => {
	const prefix = args.prefix === null ? null : <Icon id="user" className="w-5 h-5" />
	return (
		<div className="max-w-lg h-screen mx-auto flex items-center justify-center">
			<InputPassword {...args} prefix={prefix}></InputPassword>
		</div>
	)
}

export const InputPasswordd = Template.bind({})

InputPasswordd.argTypes = {
	...inputTextArgTypesClone,
}

export default {
	title: "Primitives/inputPassword",
}
