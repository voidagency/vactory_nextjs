import React from "react"
import { Card } from "./card"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Primitives/Card",
	component: Card,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
	return <Card {...args} />
}

export const box = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
box.args = {
	title: "This is the title of the card",
	excerpt:
		"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip ",
	image: <img className="w-full h-52 object-cover" src="https://place-hold.it/100x150" />,
	urlTag: "/about",
	url: "/about",
	urlContent: "En savoir plus",
	category: "Developpement",
	className: "max-w-sm",
}

export const inline = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
inline.args = {
	variant: "inline",
	title: "This is the title of the card",
	excerpt:
		"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip ",
	image: <img className="w-full h-52 object-cover" src="https://place-hold.it/100x150" />,
	urlTag: "/about",
	url: "/about",
	urlContent: "En savoir plus",
	category: "Developpement",
	className: "max-w-lg",
}

export const InlineReverse = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InlineReverse.args = {
	variant: "inlineInversed",
	title: "This is the title of the card",
	excerpt:
		"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip ",
	image: <img className="w-full h-52 object-cover" src="https://place-hold.it/100x150" />,
	urlTag: "/about",
	url: "/about",
	urlContent: "En savoir plus",
	category: "Developpement",
	className: "max-w-lg",
}
