import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Header } from "../components/header/header"
import { Slider } from "@vactory/ui/slider"
import { Footer } from "@/components/footer/footer"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { Button } from "@vactory/ui/button"
import { Arrow } from "@vactory/ui/arrows"
import { Template } from "../components/slider/template"
import { Template1 } from "../components/slider/template1"
import { Card } from "@vactory/ui/card"
import { Link } from "@vactory/ui/link"

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
	opacity: true,
}

const v1Settings = {
	loop: true,
	rtl: false,
	breakpoints: {
		"(min-width: 200px)": {
			slides: { perView: 1, spacing: 25, origin: "center" },
		},
		"(min-width: 900px)": {
			slides: { perView: 4, spacing: 10 },
		},
	},
	defaultAnimation: {
		duration: 2000,
	},
	opacity: false,
}

const DataSlider2 = [
	{
		id: 0,
		title: "Capital Azur, votre banque en ligne",
		description:
			"  Application mobile, Banque en ligne : Découvrez une nouvelle expérience de navigation au cœur de vos comptes bancaires.",
		image: "", // for the background
		link: "#",
		imageforTemplate: "https://capital-azur.com/sites/default/files/2020-05/18.png",
	},
	{
		id: 1,
		title: "COVID-19 : Capital Azur accompagne ses clients Particuliers",
		description:
			"  Report d’échéances, financements…nous vous proposons les solutions les plus adaptées à votre situation",
		image: "",
		link: "#",
		imageforTemplate: "https://capital-azur.com/sites/default/files/2020-05/17.png",
	},

	{
		id: 2,
		title: "COVID-19 : Professionnels et Entreprises : Capital Azur vous accompagne",
		description:
			" 5 mesures pour accompagner nos clients Professionnels et Entreprises en Afrique",
		image: "",
		link: "#",
		imageforTemplate: "https://capital-azur.com/sites/default/files/2020-05/16_0.png",
	},
	{
		id: 2,
		title: "COVID-19 : Professionnels et Entreprises : Capital Azur vous accompagne",
		description:
			" 5 mesures pour accompagner nos clients Professionnels et Entreprises en Afrique",
		image: "",
		link: "#",
		imageforTemplate: "https://capital-azur.com/sites/default/files/2020-05/18.png",
	},
]

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

const cardData = [
	{
		title: "What Blockchain Could Mean for Your Health Data",
		escerpt: "LIRE PLUS",
		image: (
			<img
				className="w-full h-52 object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
				src="https://capital-azur.com/sites/default/files/styles/vactory_two_cols_x1/public/2020-06/blockchain-data.jpg?h=cd72da00%201x,%20/sites/default/files/styles/vactory_two_cols_x2/public/2020-06/blockchain-data.jpg"
			/>
		),
		urlTag: "/about",
		url: "/about",
		urlContent: "LIRE PLUS",
		category: "ACTUALITE",
		className: "max-w-sm",
	},
	{
		title:
			"Crise du Coronavirus : En Afrique, le mobile money pour endiguer la propagation",
		escerpt: "LIRE PLUS",
		image: (
			<img
				className="w-full h-52 object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
				src="https://capital-azur.com/sites/default/files/styles/vactory_two_cols_x1/public/2020-05/10.jpg?h=7ba75ed5%201x,%20/sites/default/files/styles/vactory_two_cols_x2/public/2020-05/10.jpg"
			/>
		),
		urlTag: "/about",
		url: "/about",
		urlContent: "LIRE PLUS",
		category: "ANALYSE",
		className: "max-w-sm",
	},
	{
		title:
			"Crise du Coronavirus : En Afrique, le mobile money pour endiguer la propagation",
		escerpt: "LIRE PLUS",
		image: (
			<img
				className="w-full h-52 object-cover transition ease-in-out delay-100 group-hover:scale-110 duration-200"
				src="https://capital-azur.com/sites/default/files/styles/vactory_two_cols_x1/public/2020-05/10.jpg?h=7ba75ed5%201x,%20/sites/default/files/styles/vactory_two_cols_x2/public/2020-05/10.jpg"
			/>
		),
		urlTag: "/about",
		url: "/about",
		urlContent: "LIRE PLUS",
		category: "ANALYSE",
		className: "max-w-sm",
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
				variant="default"
				Template={Template}
			></Slider>
			<Container layout="full" className="flex-col">
				<div className="Container px-4 lg:px-32 py-16 ml-auto mr-auto">
					<Heading
						level={2}
						className="text-left mb-6 mt-10 before:content-['-__'] before:text-indigo-500 "
					>
						VOTRE SATISFACTION, NOTRE PASSION
					</Heading>
					<p className=" mx-auto lg:mx-32 tracking-wide antialiased text-xl font-sans">
						Découvrez Capital Azur, la première banque 100% Digitale en Afrique et oubliez
						la paperasse et les frais cachés. Avec tous nos outils dédiés aux besoins de
						tous nos clients (Particuliers, Entreprises, Corporate), Nous vous
						accompagnons chaque jour pour réaliser vos projets de vie.
					</p>
					<div className="flex items-center justify-center py-6">
						<Button variant="container">A PROPOS DE NOUS</Button>
					</div>
				</div>
			</Container>
			<Container layout="full" className="bg-sky-700">
				<div className="Container px-4 lg:px-32">
					<div className="grid md:grid-cols-2">
						<div className="md:order-last mt-16">
							<Heading
								level={2}
								className="text-left text-white mb-12 mt-10 before:content-['-__'] before:text-white"
							>
								LES FINTECHS AU SERVICE DE LA CROISSANCE EN AFRIQUE
							</Heading>
							<p className="text-white tracking-wide antialiased mb-8 text-xl font-sans ">
								La raison d’être de Capital Azur : Favoriser financière en Afrique afin
								d’accompagner le continent dans sa croissl’inclusionance. C’est pour cela
								que nous nous reposons sur le State Of The Art de la technologie.
								Fintechs, Blockchain, Mobile Banking, Digital Banking.. sont autant de
								moyens que nous mettons en oeuvre pour répondre à vos besoins, qui que
								vous soyez, où que vous voyez..
							</p>
							<div className="flex items-start py-6">
								<Button variant="container">EN SAVOIR PLUS</Button>
							</div>
						</div>
						<div className="image mt-16">
							<img
								className=""
								src="https://capital-azur.com/sites/default/files/2020-05/Group%2035.png"
								alt="Workflow"
								height="540px"
								width="515px"
							/>
						</div>
					</div>
				</div>
			</Container>
			<Container layout="full" className="flex-col bg-gray-1000">
				<div className="Container px-4 lg:px-32  py-16 ml-auto mr-auto">
					<Heading
						level={2}
						className="text-left mb-10 mt-10 tracking-wide before:content-['-__'] before:text-indigo-500 "
					>
						DES SERVICES INNOVANTS POUR UN QUOTIDIEN SIMPLIFIÉ.
					</Heading>
					<p className="mx-auto lg:mx-32 mb-16 tracking-wide antialiased text-xl font-sans">
						Capital Azur accompagne l’ensemble de sa clientèle dans leurs projets à toutes
						les étapes de leurs vie.
					</p>
					<div className="">
						<Slider
							list={DataSlider2}
							settings={v1Settings}
							Arrow={Arrow}
							variant="iconSlider"
							Template={Template1}
						></Slider>
					</div>
				</div>
			</Container>
			<Container layout="full" className="">
				<div className="Container px-4 lg:px-32 py-16 ml-auto mr-auto">
					<Heading
						level={2}
						className="text-left mb-10 mt-10 before:content-['-__'] before:text-indigo-500 "
					>
						Insights
					</Heading>
					<p className="mx-auto lg:mx-32 mb-16 tracking-wide antialiased text-xl font-sans">
						Découvrez nos actualités, nos analyses et les points de vue de nos experts
					</p>
					<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
						{cardData.map((item, index) => {
							return (
								<a href={item.url} className="group block px-4 py-4" key={index}>
									<Card
										title={
											<a href={item.url}>
												<span className="group-hover:text-indigo-600">{item.title}</span>
											</a>
										}
										urlContent={item.urlContent}
										image={item.image}
										url={item.url}
										category={
											<a href={item.url}>
												<span className="bg-blue-900 rounded-md px-2 py-1">
													{item.category}
												</span>
											</a>
										}
										className="max-w-sm"
									/>
								</a>
							)
						})}
					</div>
					<div className="flex items-center justify-center mt-16">
						<Button outline="true" Variant="primary" size="large">
							VOIR PLUS D'ACTUALITES
						</Button>
					</div>
				</div>
			</Container>
			<Container layout="full" className="bg-gray-1000">
				<div className="Container px-4 lg:px-32">
					<div className="grid md:grid-cols-2 py-16">
						<div className="my-10">
							<Heading
								level={2}
								className="text-left text-black mb-12 mt-10 before:content-['-__'] before:text-blue-400"
							>
								ACCÉDEZ À NOS SERVICES, OÙ QUE VOUS SOYEZ.
							</Heading>
							<p className="text-black tracking-wide antialiased mb-8 text-xl font-sans ">
								Nos services sont accessibles au niveau de 13 pays en Afrique, et bien
								plus dans les prochains mois !
							</p>
							<div className="flex items-start py-6">
								<Button outline="true">EN SAVOIR PLUS</Button>
							</div>
						</div>
						<div className="image my-10">
							<img
								className=""
								src="https://capital-azur.com/sites/default/files/2020-05/carte.png"
								alt="Workflow"
								height="540px"
								width="515px"
							/>
						</div>
					</div>
				</div>
			</Container>

			<Footer />

			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
		</AppWrapper>
	)
}
