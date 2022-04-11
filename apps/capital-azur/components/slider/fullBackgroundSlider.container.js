import React from "react"
import get from "lodash.get"
import { Slider } from "./slider"

export const FullSliderContainer = ({ data }) => {
	const slides = data.components.map((item) => {
		return {
			...item,
			title: get(item, "title", null),
			description: get(item, "description", null),
			image: get(item, "image.0._default", null),
			link: get(item, "link.url", null),
			link_label: get(item, "link.title", null),
		}
	})

	return <Slider items={slides} />
}
