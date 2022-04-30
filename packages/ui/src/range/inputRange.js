import React, { useContext } from "react"
import "./styles.css"
import { ThemeContext } from "@vactory/ui/theme-context"

export const InputRange = ({ label, max, min, thumb }) => {
	const { range } = useContext(ThemeContext)
	const handleInputChange = (e) => {
		console.log(e.target.value)
	}

	return (
		<div className={range.container}>
			{label && (
				<label for="inputRange" className={range.label}>
					{label}
				</label>
			)}
			<div className={range.wrapper}>
				<span className={range.intervalIndicator}>{min}</span>
				<input
					onChange={handleInputChange}
					type="range"
					className={range.input[thumb]}
					min={min}
					max={max}
					id="inputRange"
				/>
				<span className={range.intervalIndicator}>{max}</span>
			</div>
		</div>
	)
}

export default InputRange
