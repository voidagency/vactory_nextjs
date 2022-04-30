import InputButton from "./inputButton"
import { Icon } from "@vactory/ui/icon"

export const defaultInputButton = () => {
	return (
		<div className="container">
			<InputButton
				buttonClasses={"px-6 h-full"}
				buttonContent={<Icon id="document-duplicate" className="w-5 h-5 text-white" />}
				placeholder="Search..."
			/>
		</div>
	)
}

export const roundedInputButton = () => {
	return (
		<div className="container">
			<InputButton
				variant="rounded"
				buttonClasses={"px-6 h-full"}
				buttonContent={<Icon id="document-duplicate" className="w-5 h-5 text-white" />}
				placeholder="Search..."
			/>
		</div>
	)
}

export const InputButtonWithSufix = () => {
	return (
		<div className="container">
			<InputButton
				buttonClasses={"px-6 h-full"}
				buttonContent={<Icon id="document-duplicate" className="w-5 h-5 text-white" />}
				placeholder="Search..."
				sufix={<Icon id="question-mark-circle" className="w-5 h-5" />}
			/>
		</div>
	)
}

export const InputButtonWithPrefix = () => {
	return (
		<div className="container">
			<InputButton
				buttonClasses={"px-6 h-full"}
				buttonContent={<Icon id="document-duplicate" className="w-5 h-5 text-white" />}
				placeholder="Search..."
				prefix={<Icon id="question-mark-circle" className="w-5 h-5" />}
			/>
		</div>
	)
}

export const InputButtonWithAddonBefore = () => {
	return (
		<div className="container">
			<InputButton
				buttonClasses={"px-6 h-full"}
				buttonContent={<Icon id="document-duplicate" className="w-5 h-5 text-white" />}
				placeholder="Search..."
				addonBefore={<Icon id="search" className="w-5 h-5 mx-4" />}
			/>
		</div>
	)
}

export default {
	title: "Primitives/inputButton",
}
