import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { initializeRTL } from "storybook-addon-rtl"
//import "keen-slider/keen-slider.min.css" //comment this to run it in apps
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import "keen-slider/keen-slider.min.css"
import "../styles/globals.css"
initializeRTL()

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
	backgrounds: {
		default: "transparent",
		values: [
			{
				name: "transparent",
				value: "transparent",
			},
			{
				name: "white",
				value: "#ffffff",
			},
			{
				name: "gray",
				value: "#f7f8f9",
			},
			{
				name: "dark",
				value: "#1f2937",
			},
		],
	},
	setLocaleToKnob: true,
}

export const decorators = [
	(Story) => (
		<div dir="ltr">
			<AppWrapper theme={theme}>
				<Story />
			</AppWrapper>
		</div>
	),
]
