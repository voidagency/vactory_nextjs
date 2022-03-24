import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

const listItems = [
	{
		value: "Agadir",
		content: "Agadir",
	},
	{
		value: "Casablanca",
		content: "Casablana",
	},
	{
		value: "Paris",
		content: "Paris",
	},
]

const Select = ({ className, list = listItems, selected = "", ...props }) => {
	const [selectedValue, handleChange] = React.useState(selected)
	React.useState(() => {
		if (!selected) {
			handleChange(list[0].value)
		}
	})
	return (
		<select
			className={clsx(
				"block w-full py-2 pl-3 pr-10 mt-1 text-base text-black border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
				className
			)}
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
