import React, { useContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { ThemeContext } from "../context/context"

const Container = ({ children, fluid = false, ...props }) => {
	const { container } = useContext(ThemeContext)

	return (
		<div className={clsx(container, className)} {...props}>
			{children}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.isRequired,
}

export default Container
