---
to: packages/ui/src/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>.js
---
import React, { useContext } from "react"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

export const <%= name %> = ({ children, className = "", variant = "default", ...rest }) => {
	const { <%= h.changeCase.paramCase(name) %> } = useContext(ThemeContext)

	return (
		<div className={clsx(<%= h.changeCase.paramCase(name) %>[variant].base, className)} {...rest}>
			<h3>This a <%= name %> component</h3>
			{children}
		</div>
	)
}
