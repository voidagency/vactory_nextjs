import React from "react"
import { Slider } from "./slider"
import { Template } from "./template"
import Slide from "./slide"

import { Card } from "@vactory/ui/card"

const data = [
	{
		id: 0,
		title: "Capital Azur, votre banque en ligne",
		description:
			"  Application mobile, Banque en ligne : Découvrez une nouvelle expérience de navigation au cœur de vos comptes bancaires.",
		image: "https://capital-azur.com/sites/default/files/2020-12/slider-pro.jpg",
		link: "#",
	},
	{
		id: 1,
		title: "COVID-19 : Capital Azur accompagne ses clients Particuliers",
		description:
			"  Report d’échéances, financements…nous vous proposons les solutions les plus adaptées à votre situation",
		image: "https://capital-azur.com/sites/default/files/2020-05/1.jpg",
		link: "#",
	},

	{
		id: 2,
		title: "COVID-19 : Professionnels et Entreprises : Capital Azur vous accompagne",
		description:
			" 5 mesures pour accompagner nos clients Professionnels et Entreprises en Afrique",
		image: "https://capital-azur.com/sites/default/files/2020-05/3.jpg",
		link: "#",
	},

	{
		id: 3,
		title: "Gérer votre épargne en toute simplicité",
		description: " Profitez de tous les outils pour mieux gérer votre épargne",
		image: "https://capital-azur.com/sites/default/files/2020-05/1.jpg",
		link: "#",
	},
]

const defaultSettings = {
	rtl: false,
	loop: true,
	disabled: false,
	mode: "snap",
	rubberband: true,
	defaultAnimation: { duration: 500 },
	renderMode: "precision",
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 1 },
		},
	},
	opacity: false,
}

const v1Settings = {
	loop: true,
	rtl: false,
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 2, spacing: 25, origin: "center" },
		},
		"(min-width: 768px)": {
			slides: { perView: 2, spacing: 25, origin: "center" },
		},
		"(min-width: 900px)": {
			slides: { perView: 3, spacing: 20, origin: "center" },
		},
	},
	defaultAnimation: {
		duration: 500,
	},
	opacity: false,
}

export default {
	title: "Components/Slider",
}

export const Default = () => {
	return (
		<Slider settings={defaultSettings} variant="default">
			<Slide bgImage="https://loremflickr.com/640/360">
				<h1 class="text-white text-4xl md:text-4xl font-bold mb-2">
					This is th etitle of this slider
				</h1>
				<p className="text-white text-base md:text-lg font-semibold">
					lorem ipsum dolor sit amet, consectetur
				</p>
			</Slide>
			<Slide bgImage="https://loremflickr.com/640/360" />
			<Slide bgImage="https://loremflickr.com/640/360" />
			<Slide bgImage="https://loremflickr.com/640/360" />
		</Slider>
	)
}

export const BackgroundYoutubeSlider = () => {
	return (
		<Slider list={data} settings={defaultSettings} variant="default">
			<Slide bgVideoId="hZjtSdcsuhc" />
			<Slide bgImage="https://loremflickr.com/640/360" />
			<Slide bgImage="https://loremflickr.com/640/360" />
			<Slide bgImage="https://loremflickr.com/640/360" />
		</Slider>
	)
}

export const VideoYoutube = () => {
	return (
		<Slider list={data} length={4} settings={defaultSettings} variant="default">
			<Slide videoId="hZjtSdcsuhc" />
			<Slide bgImage="https://loremflickr.com/640/360" />
			<Slide bgImage="https://loremflickr.com/640/360" />
			<Slide bgImage="https://loremflickr.com/640/360" />
		</Slider>
	)
}

/*
export const Default = Templatee.bind({})
Default.args = {
	list: data,
	settings: defaultSettings,
	Arrow: Arrow,
	Template: Template,
	variant: "default",
}*/

export const V1 = () => {
	return (
		<Slider list={data} length={4} settings={v1Settings} variant="v1">
			<Slide videoId="hZjtSdcsuhc" />
			<Slide bgImage="https://loremflickr.com/640/360" />
			<Slide bgImage="https://loremflickr.com/640/360" />
			<Slide bgImage="https://loremflickr.com/640/360" />
		</Slider>
	)
}
