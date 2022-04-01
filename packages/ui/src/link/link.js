import React, { useContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

import { ThemeContext } from "../context/context"

export const Link = ({
	href = "#.",
	children,
	className,
	variant = "default",
	...rest
}) => {
	const { link } = useContext(ThemeContext)

	return (
		<a href={href} className={clsx(className, link[variant])} {...rest}>
			{children}
		</a>
	)
}

Link.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
}
