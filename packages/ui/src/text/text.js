import React, { useContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

const Text = ({ variant = "base", as = "p", className = "", children, ...props }) => {
	const Component = as
	const { text } = useContext(ThemeContext)

	return (
		<Component className={clsx(variant in text && text[variant], className)} {...props}>
			{children}
		</Component>
	)
}

Text.prototype = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	as: PropTypes.string,
	color: PropTypes.string,
}

export { Text }
