import React from "react"
import PropTypes from "prop-types"
import deepmerge from "deepmerge"
import { ThemeContext } from "@vactory/ui/theme-context"
import { theme as uiTheme } from "@vactory/ui/theme"

export const AppWrapper = ({ theme = {}, children, ...props }) => {
	const themes = deepmerge(uiTheme, theme)
	return <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
}

AppWrapper.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.object,
}
