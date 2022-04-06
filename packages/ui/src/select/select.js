import React, { useContext } from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import { ThemeContext } from "@vactory/ui/theme-context"

const Select = ({
	className = "",
	list = [],
	variant = "default",
	selected = "",
	...props
}) => {
	const [selectedValue, handleChange] = React.useState(selected)
	const { select } = useContext(ThemeContext)
	React.useState(() => {
		if (!selected) {
			handleChange(list[0].value)
		}
	})
	return (
		<select
			className={clsx(select[variant], className)}
			value={selectedValue}
			defaultValue={selectedValue}
			{...props}
		>
			{list.map((item, index) => {
				return (
					<option key={index} value={item.value}>
						{item.content}
					</option>
				)
			})}
		</select>
	)
}

Select.propTypes = {
	list: PropTypes.array.isRequired,
	selected: PropTypes.string,
}

export { Select }
