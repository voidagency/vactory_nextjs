import React from "react"
import { ThemeProvider } from "styled-components"
import { addDecorator } from "@storybook/react"
import {
	theme,
	// GlobalStyle,
	iconSet,
	VactoryIconProvider,
} from "vactory-ui"
import { AppSettings } from "vactory-gatsby-core"
import Api from "vactory-gatsby-api"
import "../../../projects/vactory/styles.css"

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((storyFn, context) => {
	const apiConfig = AppSettings.api
	const lngConfig = AppSettings.languages

	// Api configuration.
	Api.init(apiConfig.url, apiConfig.headers, lngConfig.availableLanguages)

	React.useEffect(() => {
		document.documentElement.dir = "ltr"
	}, [])

	return (
		<>
			{/* // <ThemeProvider theme={theme}> */}
			{/* <GlobalStyle/> */}
			<VactoryIconProvider value={iconSet}>{storyFn()}</VactoryIconProvider>
			{/* // </ThemeProvider> */}
		</>
	)
})
