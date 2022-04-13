import React from "react"
import { Slider } from "./fullBackgroundSlider/slider"
import { ImageSlider } from "./imageslider/slider"
import { PlaceholderSections } from "../_helpers/section"

export const backgroundSlider = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<Slider />
		</div>
	)
}

export const ImageSliders = () => {
	return (
		<div className="relative">
			<PlaceholderSections />
			<ImageSlider />
		</div>
	)
}

export default {
	title: "Components/Slider",
}
