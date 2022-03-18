import React from "react"

export const Link = ({ href = "#.", children, ...rest }) => {
	return (
		<a href={href} {...rest}>
			{children}
		</a>
	)
}
