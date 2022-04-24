import React from "react"
import { Slider } from "@vactory/ui/slider"
import Slide from "@vactory/ui/slide"
import { Container } from "@vactory/ui/container"
import { Link } from "@vactory/ui/link"

import { data as defaultData } from "./mock-data"

const SliderSettings = {
	loop: true,
	rtl: false,
	slides: { perView: "auto", spacing: 30, origin: "center" },

	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: "auto", spacing: 30, origin: "center" },
		},
	},
	defaultAnimation: {
		duration: 500,
	},
	opacity: false,
}

export const LogoSlider = ({ data = defaultData }) => {
	return (
		<Container layout="full" className="py-16">
			<Slider variant="logoSlider" className="items-center" settings={SliderSettings}>
				{data.map((item, index) => {
					return (
						<Slide key={item.id} variant="logoSlider">
							{item.url ? (
								<Link href={item.url}>
									<img src={item.image} className="mx-auto w-auto" />
								</Link>
							) : (
								<img src={item.image.src} className="mx-auto w-auto" />
							)}
						</Slide>
					)
				})}
			</Slider>
		</Container>
	)
}
