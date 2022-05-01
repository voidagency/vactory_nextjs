import React, { useContext } from "react"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

export const CheckboxInput = ({ label, id, disabled = true, checked }) => {
	const { checkbox } = useContext(ThemeContext)
	return (
		<div className={checkbox.wrapper}>
			<input
				disabled={disabled}
				checked={checked}
				type="checkbox"
				id={id}
				className={clsx(
					disabled ? checkbox["disabled"].input : checkbox["default"].input
				)}
			/>
			<label
				for={id}
				className={clsx(
					disabled ? checkbox["disabled"].label : checkbox["default"].label
				)}
			>
				{label}
			</label>
		</div>
	)
}

export default CheckboxInput
