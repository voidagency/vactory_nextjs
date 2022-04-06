import React from "react"
import { Accordion } from "./accordion"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/accordion",
	component: Accordion,
}

const Template = (args) => {
	return <Accordion {...args} />
}

export const accordion = Template.bind({})
accordion.args = {
	accordionButtomText: "hello",
	accordionPanelText: "If you're unhappy with your purchase for any reason",
}
