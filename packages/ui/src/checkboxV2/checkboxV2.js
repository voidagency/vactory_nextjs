import React, { forwardRef, useContext, useEffect, useState } from "react"
import { ThemeContext } from "@vactory/ui/theme-context"
import { Icon } from "@vactory/ui/icon"
import clsx from "clsx"

export const CheckboxInput = forwardRef(
	({ label, name, disabled = false, checked = true, onChange }, ref) => {
		const [isChecked, setIsChecked] = useState(checked)
		const { checkboxV2 } = useContext(ThemeContext)

		const toggleCheckbox = () => {
			!disabled && setIsChecked((prev) => !prev)
		}

		useEffect(() => {
			onChange?.(checked)
		}, [checked])

		return (
			<div className={checkboxV2.wrapper}>
				<div
					ref={ref}
					data-name={name} // name of the input
					data-checked={isChecked} // checked value to access but the forwarded ref
					className={clsx(
						checkboxV2.input,
						isChecked && disabled
							? checkboxV2.checked["disabled"]
							: isChecked && !disabled
							? checkboxV2.checked["enabled"]
							: !isChecked && disabled
							? checkboxV2.unchecked["disabled"]
							: checkboxV2.unchecked["enabled"]
					)}
					onClick={toggleCheckbox}
				>
					<Icon id="check" className="text-white" />
				</div>
				<label
					className={clsx(
						disabled ? checkboxV2.label["disabled"] : checkboxV2.label["enabled"]
					)}
					onClick={toggleCheckbox}
				>
					{label}
				</label>
			</div>
		)
	}
)
export default CheckboxInput
