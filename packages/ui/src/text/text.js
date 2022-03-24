import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const texts = {
	base: "text-base",
	small: "text-xs",
	large: "text-xl",
	intro: "text-2xl text-indigo-600",
	quote: "text-lg",
}

const Text = ({ variant = "base", as = "p", className = "", children, ...props }) => {
	const Component = as

	return (
		<Component className={clsx(variant in texts && texts[variant], className)} {...props}>
			{children}
		</Component>
	)
}

Text.prototype = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.oneOf(["base", "small", "large", "intro", "quote"]),
	className: PropTypes.string,
	as: PropTypes.string,
}

export { Text }
