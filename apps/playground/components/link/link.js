import React from "react"
import { default as NextLink } from "next/link"

export const Link = ({ href = "#.", children, ...rest }) => {
	return (
		<NextLink href={href} passHref>
			<a {...rest}>{children}</a>
		</NextLink>
	)
}
