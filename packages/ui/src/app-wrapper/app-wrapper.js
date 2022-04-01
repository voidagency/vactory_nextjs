import React from "react"
import PropTypes from "prop-types"
import deepmerge from "deepmerge"
import { ThemeContext } from "../context/context"
import { theme as uiTheme } from "../theme/theme"

export const AppWrapper = ({ theme = {}, children, ...props }) => {
	const themes = deepmerge(uiTheme, theme)
	console.log(themes)
	return <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
}

AppWrapper.PropTypes = {
	children: PropTypes.isRequired,
	theme: PropTypes.object,
}
