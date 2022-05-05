import React, { forwardRef, useContext, useEffect, useState } from "react"
import { ThemeContext } from "@vactory/ui/theme-context"
import { Icon } from "@vactory/ui/icon"
import clsx from "clsx"

const RadioContext = React.createContext()

const InputRadioElement = ({ label, inputId }) => {
	const { selectedInput, setSelectedInput } = useContext(RadioContext)
	const { radioV2 } = useContext(ThemeContext)
	const handleInputClick = () => {
		setSelectedInput(inputId)
	}
	return (
		<div className={radioV2.radioContainer}>
			<div
				onClick={handleInputClick}
				className={clsx(
					radioV2.input,
					selectedInput === inputId ? radioV2.state.checked : radioV2.state.unChecked
				)}
			>
				{selectedInput === inputId && (
					<Icon id="dots-circle-horizontal-solid" className={radioV2.icon}></Icon>
					/** this icon must a be a simple filled circle */
				)}
			</div>
			<label onClick={handleInputClick} className="text-sm">
				{label}
			</label>
		</div>
	)
}

export const InputRadio = forwardRef(({ options, onChange }, ref) => {
	const [selectedInput, setSelectedInput] = useState(null)
	const { radioV2 } = useContext(ThemeContext)

	useEffect(() => {
		onChange?.(selectedInput)
		ref.current = { checked: selectedInput }
	}, [selectedInput])

	return (
		<RadioContext.Provider value={{ selectedInput, setSelectedInput }}>
			<div className={radioV2.wrapper}>
				{options.map((option) => {
					return (
						<InputRadioElement key={option.id} label={option.label} inputId={option.id} />
					)
				})}
			</div>
		</RadioContext.Provider>
	)
})
export default InputRadio
