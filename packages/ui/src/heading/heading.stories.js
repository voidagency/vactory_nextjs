import React from "react"

import { Heading } from "./heading"

export default {
	title: "Primitives/Headings",
	component: Heading,
}

export const h1 = () => (
	<Heading level={1} className="text-black">
		This is the h1
	</Heading>
)

export const h2 = () => <Heading level={2}>This is the h2</Heading>

export const h3 = () => <Heading level={3}>This is the h3</Heading>

export const h4 = () => <Heading level={4}>This is the h4</Heading>

export const h5 = () => <Heading level={5}>This is the h5</Heading>

export const h6 = () => <Heading level={6}>This is the h6</Heading>

export const title = () => (
	<Heading level={2} variant="title">
		This is the title of the paragraph
	</Heading>
)

export const h1WithH2Style = () => (
	<Heading level={1} variant="2">
		This is heading level 1 with style of heading level 2
	</Heading>
)
