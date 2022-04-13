import { Icon } from "@vactory/ui/icon"

import audi from "../../public/img/audi.png"
import nissan from "../../public/img/nissan.png"
import renault from "../../public/img/renault.png"
import citroen from "../../public/img/citroen.png"

export const cards = [
	{
		id: 1,
		title: "Audi Q3 Premium 2.0L TDI 143",
		excerpt: "2017",
		image: <img src={audi.src} className="mx-auto" />,
		url: "/",
		urlContent: <Icon id="arrow-circle-right" width="25" height="25" />,
	},
	{
		id: 1,
		title: "Nissan quashqai Accenta...",
		excerpt: "2017",
		image: <img src={nissan.src} className="mx-auto" />,
		url: "/",
		urlContent: <Icon id="arrow-circle-right" width="25" height="25" />,
	},
	{
		id: 1,
		title: "RENAULT Mégane Sedan EXP...",
		excerpt: "2017",
		image: <img src={renault.src} className="mx-auto" />,
		url: "/",
		urlContent: <Icon id="arrow-circle-right" width="25" height="25" />,
	},
	{
		id: 1,
		title: "CITROEN Berlingo Attraction...",
		excerpt: "2017",
		image: <img src={citroen.src} className="mx-auto" />,
		url: "/",
		urlContent: <Icon id="arrow-circle-right" width="25" height="25" />,
	},
]
