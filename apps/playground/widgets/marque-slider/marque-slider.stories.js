import React from "react"
import { MarqueSlider } from "./marque-slider"

import { Icon } from "@vactory/ui/icon"

import audi from "../../public/img/audi.png"
import nissan from "../../public/img/nissan.png"
import renault from "../../public/img/renault.png"
import citroen from "../../public/img/citroen.png"

const cards = [
	{
		id: 1,
		title: "Audi Q3 Premium 2.0L TDI 143",
		excerpt: "2017",
		image: <img src={audi} className="mx-auto" />,
		url: "/",
		urlContent: <Icon id="arrow-circle-right" width="25" height="25" />,
	},
	{
		id: 2,
		title: "Nissan quashqai Accenta...",
		excerpt: "2017",
		image: <img src={nissan} className="mx-auto" />,
		url: "/",
		urlContent: <Icon id="arrow-circle-right" width="25" height="25" />,
	},
	{
		id: 3,
		title: "RENAULT Mégane Sedan EXP...",
		excerpt: "2017",
		image: <img src={renault} className="mx-auto" />,
		url: "/",
		urlContent: <Icon id="arrow-circle-right" width="25" height="25" />,
	},
	{
		id: 4,
		title: "CITROEN Berlingo Attraction...",
		excerpt: "2017",
		image: <img src={citroen} className="mx-auto" />,
		url: "/",
		urlContent: <Icon id="arrow-circle-right" width="25" height="25" />,
	},
]

export const Default = () => <MarqueSlider data={cards} />

export default {
	title: "Dynamic Fields/Marque Slider",
}
