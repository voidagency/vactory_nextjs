import React, { useContext } from "react"
import { ThemeContext } from "@vactory/ui/theme-context"

export const InputRadio = ({ name, options, handleInputChange }) => {
	const { inputRadio } = useContext(ThemeContext)
	const InputChange = (e) => {
		handleInputChange?.(e.target.value)
	}
	return (
		<div className={inputRadio.container}>
			{options.map((option) => {
				return (
					<div className={inputRadio.wrapper}>
						<input
							onChange={InputChange}
							class={inputRadio.input}
							type="radio"
							name={name}
							id={option.key}
							value={option.key}
						/>
						<label class={inputRadio.label} for={option.key}>
							{option.value}
						</label>
					</div>
				)
			})}
		</div>
	)
}

export default InputRadio
