import React, { useContext, forwardRef } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

import { ThemeContext } from "@vactory/ui/theme-context"

const Link = forwardRef(
	({ href = "#.", children, className, variant = "default", ...rest }, ref) => {
		const { link } = useContext(ThemeContext)

		return (
			<a ref={ref} href={href} className={clsx(className, link[variant])} {...rest}>
				{children}
			</a>
		)
	}
)

Link.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
}

export { Link }
