const path = require("path")
module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
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
}
