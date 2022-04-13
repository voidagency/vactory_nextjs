import React from "react"
import { MediaBox } from "./socialmediabox"

const socialmedia = [
	{ id: "youtube-solid", href: "#" },
	{ id: "twitter-solid", href: "#" },
	{ id: "linkedin-solid", href: "#" },
	{ id: "facebook-solid", href: "#" },
]

export default {
	title: "Components/SocialMediaBox",
}

const Template = (args) => <MediaBox {...args} />

export const Default = Template.bind({})
Default.args = {
	list: socialmedia,
}
