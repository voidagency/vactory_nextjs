import React, { useContext, useState } from "react"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

export const CheckboxInput = ({ label, id, disabled = false, checked = false }) => {
	const { checkbox } = useContext(ThemeContext)
	const [isChecked, setIsChecked] = useState(checked)
	const handleInputChange = () => {
		setIsChecked((prev) => !prev)
	}
	return (
		<div className={checkbox.wrapper}>
			<input
				disabled={disabled}
				checked={isChecked}
				type="checkbox"
				id={id}
				className={clsx(
					disabled ? checkbox["disabled"].input : checkbox["default"].input
				)}
				onClick={handleInputChange}
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
