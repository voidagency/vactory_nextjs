import React, { useContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

/**
 * TODO: i guess We should merge theme object of text and heading.
 */

const Heading = ({ children, className = "", level = 2, variant = null, ...props }) => {
	const levels = [1, 2, 3, 4, 5, 6]
	const Component = level ? `h${level}` : "h2"
	const { heading } = useContext(ThemeContext)

	return (
		<Component
			className={clsx(
				variant === null && heading[level],
				variant && heading[variant],
				className
			)}
			{...props}
		>
			{children}
		</Component>
	)
}

Heading.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	variant: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

export { Heading }

/**
 * fs lh ls fw fm ......
 */
