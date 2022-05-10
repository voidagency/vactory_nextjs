import React from "react"
import { Heading } from "@vactory/ui/heading"

export const h1 = () => (
	<Heading level={1} className="text-black">
		This is the h1
	</Heading>
)

export const h2 = () => (
	<Heading level={2} className="text-black">
		This is the h2
	</Heading>
)

export const h3 = () => (
	<Heading level={3} className="text-black">
		This is the h3
	</Heading>
)

export const h4 = () => (
	<Heading level={4} className="text-black">
		This is the h4
	</Heading>
)

export const h5 = () => (
	<Heading level={5} className="text-black">
		This is the h5
	</Heading>
)

export const h6 = () => (
	<Heading level={6} className="text-black">
		This is the h6
	</Heading>
)

export default {
	title: "primitives/heading",
}
