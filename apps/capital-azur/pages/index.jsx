import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import Header from "../components/header/header"
import { Slider } from "../components/slider/slider"
import { Footer } from "@/components/footer/footer"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { Button } from "@vactory/ui/button"
import { Arrow } from "../components/slider/arrows"
import { Template } from "../components/slider/template"

const tools = [
	{
		name: "OUVRIR UN COMPTE",
		href: "#",
		icon: "",
	},
	{
		name: "RECLAMATION",
		href: "#",
		icon: "",
	},
	{
		name: "FAQ",
		href: "#",
		icon: "",
	},
]

const socialmedia = [
	{ id: "youtube-solid", href: "#" },
	{ id: "twitter-solid", href: "#" },
	{ id: "linkedin-solid", href: "#" },
	{ id: "facebook-solid", href: "#" },
]

const defaultSettings = {
	rtl: false,
	loop: true,
	disabled: false,
	mode: "snap",
	rubberband: true,
	defaultAnimation: { duration: 5000 },
	renderMode: "precision",
}

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

export default function Index() {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<Slider
				list={data}
				settings={defaultSettings}
				Arrow={Arrow}
				Template={Template}
			></Slider>
			<Container className=" flex-col">
				<div className="Container py-10 ml-auto mr-auto">
					<Heading
						level={2}
						className="text-left mb-6 mt-10 before:content-['-__'] before:text-indigo-500 "
					>
						VOTRE SATISFACTION, NOTRE PASSION
					</Heading>
					<p className="px-24">
						Découvrez Capital Azur, la première banque 100% Digitale en Afrique et oubliez
						la paperasse et les frais cachés. Avec tous nos outils dédiés aux besoins de
						tous nos clients (Particuliers, Entreprises, Corporate), Nous vous
						accompagnons chaque jour pour réaliser vos projets de vie.
					</p>
					<div className="text-align-center">
						<Button>A PROPOS DE NOUS</Button>
					</div>
				</div>
			</Container>

			<Footer />

			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
		</AppWrapper>
	)
}
