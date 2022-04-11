import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { initializeRTL } from "storybook-addon-rtl"

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

// export const decorators = [
//   (Story) => (
//     <div dir="ltr">
//       <Story />
//     </div>
//   ),
// ];
