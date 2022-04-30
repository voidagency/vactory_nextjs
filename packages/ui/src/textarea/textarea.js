import React, { useContext, useState } from "react"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

export const Textarea = ({
	variant = "default",
	placeholder,
	handleTextareaChange,
	rows = 1,
	resize = false,
	showCounter = false,
	maxLength = null,
}) => {
	const { textarea } = useContext(ThemeContext)
	const [length, setLength] = useState(0)
	const onTextareaChange = (e) => {
		var inputValue = e.target.value
		console.log()
		setLength(inputValue.split("").length)
		handleTextareaChange?.(e)
	}
	return (
		<div className="relative">
			<textarea
				className={clsx(textarea[variant].base, resize && textarea[variant].resize)}
				placeholder={placeholder}
				onChange={(e) => {
					onTextareaChange(e)
				}}
				rows={rows}
				maxLength={maxLength}
			></textarea>
			{showCounter && maxLength !== null && (
				<span className="absolute bottom-2 right-2 text-sm">{`${length}/${maxLength}`}</span>
			)}
		</div>
	)
}

export default Textarea
