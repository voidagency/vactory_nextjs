const path = require("path")
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin")
const uiJson = require("../../../packages/ui/package.json")
const uiModulesKey = Object.keys(uiJson.browser)
let uiAliasModules = {}
uiModulesKey.forEach((key, index) => {
	if (key.includes("@vactory/ui")) {
		uiAliasModules[key] = path.resolve(
			__dirname,
			`../../../packages/ui/${uiJson.browser[key]}`
		)
	}
})

module.exports = {
	stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
	staticDirs: ["../public"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-viewport",
		{
			name: "@storybook/addon-docs",
			options: {
				sourceLoaderOptions: {
					injectStoryParameters: false,
				},
			},
		},
		"@storybook/addon-controls",
		"@storybook/addon-backgrounds",
		"@storybook/addon-toolbars",
		"@storybook/addon-measure",
		"@storybook/addon-outline",
		{
			name: "@storybook/addon-storysource",
			options: {
				rule: {
					test: [/\.stories\.js?$/],
					include: [path.resolve(__dirname, "../src")], // You can specify directories
				},
				loaderOptions: {
					injectStoryParameters: false,
					prettierConfig: { printWidth: 80, singleQuote: false },
				},
			},
		},
		"storybook-addon-rtl",
	],
	framework: "@storybook/react",
	webpackFinal: async (config, { configType }) => {
		config.resolve.alias = {
			...config.resolve.alias,
			...uiAliasModules,
		}

		config.resolve.plugins = [
			...(config.resolve.plugins || []),
			new TsconfigPathsPlugin({
				extensions: config.resolve.extensions,
			}),
		]

		return config
	},
}
