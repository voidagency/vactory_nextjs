import React, { useContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { ThemeContext } from "../context/context"

const Container = ({ children, layout = "default", className = "", ...props }) => {
	const { container } = useContext(ThemeContext)

	return (
		<div className={clsx(container[layout], className)} {...props}>
			{children}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	layout: PropTypes.string,
}

export { Container }
