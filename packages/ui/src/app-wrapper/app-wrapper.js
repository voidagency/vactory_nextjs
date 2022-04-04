import React from "react"
import PropTypes from "prop-types"
import deepmerge from "deepmerge"
import { ThemeContext } from "../context/context"
import { theme as uiTheme } from "../theme/theme"

export const AppWrapper = ({ theme = {}, children, ...props }) => {
	const themes = deepmerge(uiTheme, theme)
	return <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
}

AppWrapper.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.object,
}
