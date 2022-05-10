import Input from "./input"
import { Button } from "@vactory/ui/button"
import { useRef } from "react"

export const InputButton = ({
	buttonContent,
	handleInputChange,
	handleButtonClick,
	buttonClasses,
	...props
}) => {
	console.log(props)
	const inputRef = useRef()
	const _handleButtonClick = () => {
		handleButtonClick?.(inputRef.current.value)
	}
	return (
		<Input
			ref={inputRef}
			handleInputChange={handleInputChange}
			addonAfter={
				<Button
					variant={props.variant === "rounded" ? "roundedAddonAfter" : "primary"}
					onClick={_handleButtonClick}
					className={buttonClasses}
				>
					{buttonContent}
				</Button>
			}
			{...props}
		/>
	)
}

export default InputButton
