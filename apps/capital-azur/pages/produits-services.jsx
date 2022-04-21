import React from "react"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"

import { Container } from "@vactory/ui/container"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { Accordion } from "@vactory/ui/accordion"
import { Card } from "@vactory/ui/card"

import { theme } from "../theme/theme"

const accordionNodes = [
	{
		id: 1,
		button: <span>Epargne</span>,
		panel: (
			<Card
				className="p-8 md:px-16 md:pt-14 md:pb-24"
				excerpt="Chez Capital Azur, nous nous sommes convaincus qu’une banque doit s’adapter à vos besoins et à votre quotidien. Nos offres Comptes et Cartes vous permettent de gérer votre argent où que vous soyez, afin de vous aider à réaliser vos projets de vie et vous offrir une expérience bancaire agréable, qui vous correspond."
				image={
					<img
						src="https://capital-azur.com/sites/default/files/2020-05/14.jpg"
						className="w-full object-cover"
					></img>
				}
				urlContent={
					<a className="before:content-[''] before:w-12 before:h-1 before:inline-block before:mr-3 before:bg-blue-500 flex items-center text-blue-500">
						Contactez un conseiller
					</a>
				}
				url="/about"
				variant={"accordionCardInline"}
			/>
		),
	},
	{
		id: 2,
		button: <span>Comptes et cartes</span>,
		panel: (
			<Card
				className="p-8 md:px-16 md:pt-14 md:pb-24"
				excerpt="Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				image={
					<img
						src="https://capital-azur.com/sites/default/files/2020-05/test_1400x790_1.jpeg"
						className="w-full object-cover"
					></img>
				}
				variant={"accordionCardInlineReversed"}
			/>
		),
	},
	{
		id: 3,
		button: <span>Assurance</span>,
		panel: (
			<Card
				className="p-8 md:px-16 md:pt-14 md:pb-24"
				excerpt="Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				image={
					<img
						src="https://capital-azur.com/sites/default/files/2020-04/test-1280x720-8.jpeg"
						className="w-full object-cover"
					></img>
				}
				urlContent={
					<a className="before:content-[''] before:w-12 before:h-1 before:inline-block before:mr-3 before:bg-blue-500 flex items-center text-blue-500">
						En savoir plus
					</a>
				}
				url="/about"
				variant={"accordionCardInline"}
			/>
		),
	},
]

export const ProduitsServices = () => {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<Container className="pt-16">
				<Accordion nodes={accordionNodes}></Accordion>
			</Container>
			<Footer />
		</AppWrapper>
	)
}

export default ProduitsServices
