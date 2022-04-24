import React from "react"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Primitives/Button",
	component: Button,
}

export const Primary = () => <Button variant="primary">primary</Button>

export const PrimaryWithIcon = () => (
	<Button variant="primary">
		primary <Icon id="emoji-happy" size="small" width="20" height="20" />
	</Button>
)

export const PrimaryPrefixIcon = () => (
	<Button variant="primary">
		<Icon id="emoji-happy" size="small" width="20" height="20" /> primary
	</Button>
)

export const Secondary = () => <Button variant="secondary">The button primary</Button>

export const PrimaryIcon = () => (
	<Button variant="primary" size="small">
		<Icon id="emoji-happy" size="small" width="20" height="20" />
	</Button>
)

export const SecondayIcon = () => (
	<Button variant="secondary" size="small">
		<Icon id="emoji-happy" size="small" width="20" height="20" />
	</Button>
)
