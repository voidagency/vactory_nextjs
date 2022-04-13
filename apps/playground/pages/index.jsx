import Header from "../components/header/header"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import logo from "../public/logo.png"
import { Container } from "@vactory/ui/container"
import { Button } from "@vactory/ui/button"
import { Link } from "@vactory/ui/link"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { Select } from "@vactory/ui/select"
import { Card } from "@vactory/ui/card"
import { Icon } from "@vactory/ui/icon"

import { MarqueSlider } from "../widgets/marque-slider/marque-slider"

import personImg from "../public/img/person.png"
import { card } from "../../portaillpp/theme/card"

const pages = [
	{ id: "1", name: "Projects", href: "#", current: false },
	{ id: "2", name: "Project Nero", href: "#", current: true },
]

const menu = [
	{
		id: "menu_1",
		title: "Trouver un vehicule",
		url: "/",
		subdomaine: [
			{
				title: "Voiture",
				icon: "",
				url: "",
			},
			{
				title: "Moto",
				icon: "",
				url: "",
			},
			{
				title: "Trucks",
				icon: "",
				url: "",
			},
		],
	},
	{
		id: "menu_2",
		title: "Comment ça marche",
		url: "/",
	},
]

const EspacePrive = () => {
	return (
		<div>
			<Button variant="primary" outline={true} className="mr-3">
				Se connecter
			</Button>
			<Button variant="primary">S'inscrire</Button>
		</div>
	)
}

const Menu = () => {
	return (
		<div>
			{menu.map((item, index) => {
				return (
					<Link key={item.id} href={item.url} variant="menu" className="ml-10">
						{item.title}
					</Link>
				)
			})}
		</div>
	)
}

const Header2 = () => {
	console.log("logo =>", logo)
	return (
		<Container variant="full" className="bg-white py-8">
			<Container className="flex lg:justify-between items-center">
				<div>
					<img src={logo.src} className="h-16 w-auto" />
				</div>
				<Menu />
				<EspacePrive />
			</Container>
		</Container>
	)
}

const FilterSection = () => {
	const listItems = [
		{
			value: "1",
			content: "Marque",
		},
		{
			value: "2",
			content: "Casa blanca",
		},
		{
			value: "3",
			content: "Paris",
		},
	]

	return (
		<Container className="py-14">
			<div className="mb-6">
				<Heading level="3" className="text-center">
					Trouver une voiture
				</Heading>
				<Text className="text-center">
					Accédez en quelques clics à une large choix <br /> de véhicules, quleque soit
					votre besoin
				</Text>
			</div>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<Select className="space-x-6" list={listItems} />
				<Select className="space-x-6" list={listItems} />
				<Select className="space-x-6" list={listItems} />

				<Select className="space-x-6" list={listItems} />
				<Select className="space-x-6" list={listItems} />
				<Select className="space-x-6" list={listItems} />
			</div>
			<div className="text-center mt-10">
				<Button variant="primary" type="submit" className="text-white w-32">
					Valider
				</Button>
			</div>
		</Container>
	)
}

const CommentCaMarche = () => {
	const cards = [
		{
			id: "1",
			icon: personImg.src,
			iconalt: "image alt",
			title: "S'inscrire",
			description:
				"Créez un compte sur l'espace privé du site pour avoir accés à la soumission",
		},
		{
			id: "2",
			icon: personImg.src,
			iconalt: "image alt",
			title: "S'inscrire",
			description:
				"Créez un compte sur l'espace privé du site pour avoir accés à la soumission",
		},
		{
			id: "3",
			icon: personImg.src,
			iconalt: "image alt",
			title: "S'inscrire",
			description:
				"Créez un compte sur l'espace privé du site pour avoir accés à la soumission",
		},
		{
			id: "4",
			icon: personImg.src,
			iconalt: "image alt",
			title: "S'inscrire",
			description:
				"Créez un compte sur l'espace privé du site pour avoir accés à la soumission",
		},
	]
	return (
		<Container className="py-14">
			<Heading level="2" className="text-center mb-9">
				Comment ça marche
			</Heading>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{cards.map((card) => {
					console.log("card => ", card.description)
					return (
						<Card
							key={card.id}
							variant="chaibi"
							title={card.title}
							excerpt={card.description}
							url="/"
							image={<img src={card.icon} className="mx-auto" alt={card.iconalt} />}
						/>
					)
				})}
			</div>
		</Container>
	)
}

export default function Index() {
	return (
		<AppWrapper theme={theme}>
			<Header2 />
			<FilterSection />
			<CommentCaMarche />
			<MarqueSlider />
		</AppWrapper>
	)
}
