import React, { useEffect, useState } from "react"
import { data } from "./data"
import { defaultSettings } from "./data"
import { Slider } from "@vactory/ui/slider"
import { Template } from "../../components/screen-slider/template"
import { Arrow } from "@vactory/ui/arrows"
import { Container } from "@vactory/ui/container"
import Slide from "@vactory/ui/slide"

export const ScreenSlider = ({}) => {
	return (
		<Slider
			list={data}
			settings={defaultSettings}
			Arrow={Arrow}
			variant="default"
			Template={Template}
		>
			{data.map((item, index) => {
				return (
					<Slide key={index} bgImage={item.image}>
						<Template item={item} />
					</Slide>
				)
			})}
		</Slider>
	)
}
