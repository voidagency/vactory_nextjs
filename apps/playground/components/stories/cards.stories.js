import React from "react"
import { Card } from "@vactory/ui/card"
import { Icon } from "@vactory/ui/icon"
import nissan from "../../public/img/marque-slider/nissan.png"
import vehiculeImg from "../../public/img/types/voitures.png"
import { Heading } from "@vactory/ui/heading"
import { Link } from "@vactory/ui/link"

const data = {
	title: "This is the title of the card",
	excerpt:
		"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip ",
	image: <img className="w-full object-cover" src="https://place-hold.it/100x150" />,
	urlTag: "/about",
	url: "/about",
	urlContent: "En savoir plus",
	category: "Developpement",
	className: "max-w-sm",
}

export const Chaibi = () => {
	const data2 = {
		title: "This is the title of the card",
		excerpt:
			"lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip ",
		image: <img className="w-full h-20" src="https://place-hold.it/100x150" />,
		urlTag: "/about",
		url: "/about",
		urlContent: "En savoir plus",
		category: "Developpement",
		className: "max-w-sm",
	}
	return <Card {...data2} variant="chaibi" />
}

export const Marque = () => {
	const data2 = {
		title: "Nissan quashqai Accenta...",
		excerpt: "2017",
		image: <img src={nissan} className="mx-auto" />,
		url: "/",
		urlContent: <Icon id="arrow-circle-right" width="25" height="25" />,
	}
	return <Card {...data2} variant="marque" className="w-96" />
}

export const CardImagetitle = () => {
	console.log("vehiculeImg", vehiculeImg)
	const data2 = {
		title: "Nissan quashqai Accenta...",
		image: <img src={vehiculeImg} className="mx-auto" />,
		url: "/",
	}
	return (
		<div className="relative w-64">
			<img src={data2.image} className="w-full h-full" />
			<div className="text-white bg-gradient-to-b from-black/30 to-black/100 hover:to-black/80  absolute top-0 left-0 rtl:left-auto rtl:right-0 flex flex-row justify-between items-end w-full h-full px-10 py-[38px] transition transition-all ease-in duration-300">
				<Heading level={3} className="">
					{data2.title}
				</Heading>
				{data2.url && (
					<Link
						href={data2.url}
						className="text-[28px] leading-[38px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full"
					>
						<Icon id="arrow-right" width="36" height="36" />
					</Link>
				)}
			</div>
		</div>
	)
}

export default {
	title: "primitives/Cards",
}
