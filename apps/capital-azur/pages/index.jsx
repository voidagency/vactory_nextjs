import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Header } from "../components/header/header"
import { Footer } from "@/components/footer/footer"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BackToTop } from "@vactory/ui/back-to-top"
import { ScreenSlider } from "../widgets/sreen-slider/screen-slider"
import { Container1 } from "../widgets/container1/container"
import { Container2 } from "../widgets/container2/container"
import { Container3 } from "../widgets/container3/container"
import { Container4 } from "../widgets/container4/container"
import { Container5 } from "../widgets/slider-container/container"
import { Container6 } from "../widgets/container6/container"
import {
	dataContainerSlider,
	SliderCardSettings,
} from "../widgets/slider-container/data/data-index/IndexSlider"
import { CardTemplate } from "../widgets/slider-container/template/template-Index/card-template"

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

// data for container2 with bloc and image
export const dataContainer2 = {
	title: "LES FINTECHS AU SERVICE DE LA CROISSANCE EN AFRIQUE",
	paragraph:
		"La raison d’être de Capital Azur : Favoriser financière en Afrique afin d’accompagner le continent dans sa croissl’inclusionance. C’est pour cela que nous nous reposons sur le State Of The Art de la technologie. Fintechs, Blockchain, Mobile Banking, Digital Banking.. sont autant de moyens que nous mettons en oeuvre pour répondre à vos besoins, qui que vous soyez, où que vous voyez..",
	button: "",
	image: (
		<img
			className=""
			src={"https://capital-azur.com/sites/default/files/2020-05/Group%2035.png"}
			alt="Workflow"
			height="540px"
			width="515px"
		/>
	),
}

export const containerTheme = {
	wrapper: "bg-blue-1000",
	header:
		"text-left tracking-widest text-white mb-12 mt-10 before:content-['-__'] before:text-white",
	paragraph: "text-white tracking-wide antialiased mb-8 text-xl font-sans",
	image: "image mt-16",
	button: "flex items-center justify-center py-6",
}

const dataContainer1 = {
	title: "VOTRE SATISFACTION, NOTRE PASSION",
	paragraph:
		"Découvrez Capital Azur, la première banque 100% Digitale en Afrique et oubliez la paperasse et les frais cachés. Avec tous nos outils dédiés aux besoins de tous nos clients (Particuliers, Entreprises, Corporate), Nous vous accompagnons chaque jour pour réaliser vos projets de vie.",
	button: "A PROPOS DE NOUS",
}

//data for container2
export default function Index() {
	return (
		<AppWrapper theme={theme}>
			<Header />

			<ScreenSlider />
			<Container1 data={dataContainer1} />
			<Container2 data={dataContainer2} containerTheme={containerTheme} />
			<Container3 />
			<Container4 />
			<Container5
				data={dataContainerSlider}
				SliderSettings={SliderCardSettings}
				Template={CardTemplate}
			/>
			<Container6 />
			<Footer />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
			<BackToTop />
		</AppWrapper>
	)
}
