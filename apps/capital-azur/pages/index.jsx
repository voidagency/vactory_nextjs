import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Header } from "../components/header/header"
import { Footer } from "@/components/footer/footer"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BackToTop } from "@vactory/ui/back-to-top"
import { ScreenSlider } from "../widgets/sreen-slider/screen-slider"
import { BlogContainer as Container1 } from "../widgets/blog-container/container"
import { BlogImgContainer as Container2 } from "../widgets/blogImage-container/container"
import { ContainerSlider as Container5 } from "../widgets/slider-container/container"
import { ContainerSlider as Container3 } from "../widgets/slider-container/container"
import { cardContainer as Container4 } from "../widgets/card-container/container"
import { dataCard as dataContainer4 } from "../widgets/card-container/data/data-index"
import { BlogImgContainer as Container6 } from "../widgets/blogImage-container/container"
import {
	dataContainer3,
	sliderSettingsContainer3,
	dataContainer5,
	sliderSettingsContainer5,
} from "../widgets/slider-container/data/data-index/IndexSlider"
import { CardTemplate } from "../widgets/slider-container/template/template-Index/card-template"
import { Template1 } from "../widgets/slider-container/template/template-Index/icon-template"

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

export const dataContainer2 = {
	title: "LES FINTECHS AU SERVICE DE LA CROISSANCE EN AFRIQUE",
	paragraph:
		"La raison d’être de Capital Azur : Favoriser financière en Afrique afin d’accompagner le continent dans sa croissl’inclusionance. C’est pour cela que nous nous reposons sur le State Of The Art de la technologie. Fintechs, Blockchain, Mobile Banking, Digital Banking.. sont autant de moyens que nous mettons en oeuvre pour répondre à vos besoins, qui que vous soyez, où que vous voyez..",
	button: "EN SAVOIR PLUS",
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

const themeContainer2 = {
	wrapper: "bg-blue-1000",
	container: {
		wrapper: "Container px-4 lg:px-32",
		grid: {
			wrapper: "grid md:grid-cols-2",
			gridCol1: {
				wrapper: "md:order-last py-10",
				header:
					"text-left tracking-widest text-white mb-12 mt-10 before:content-['-__'] before:text-white",
				paragraph: "text-white tracking-wide antialiased mb-8 text-xl font-sans",
			},
			button: "flex items-center justify-center py-6",
			gridCol2: {
				wrapper: "mt-16",
			},
		},
	},
}

const dataContainer1 = {
	title: "VOTRE SATISFACTION, NOTRE PASSION",
	paragraph:
		"Découvrez Capital Azur, la première banque 100% Digitale en Afrique et oubliez la paperasse et les frais cachés. Avec tous nos outils dédiés aux besoins de tous nos clients (Particuliers, Entreprises, Corporate), Nous vous accompagnons chaque jour pour réaliser vos projets de vie.",
	button: "A PROPOS DE NOUS",
}

const datacontainer6 = {
	title: "ACCÉDEZ À NOS SERVICES, OÙ QUE VOUS SOYEZ.",
	paragraph:
		"Nos services sont accessibles au niveau de 13 pays en Afrique, et bien plus dans les prochains mois !",
	button: "NOTRE PRESENCE EN AFRIQUE",
	image: (
		<img
			className=""
			src="https://capital-azur.com/sites/default/files/2020-05/carte.png"
			alt="Workflow"
			height="540px"
			width="515px"
		/>
	),
}

const themeContainer6 = {
	wrapper: "bg-gray-1000",
	container: {
		wrapper: "Container px-4 lg:px-32",
		grid: {
			wrapper: "grid md:grid-cols-2 py-16",
			gridCol1: {
				wrapper: "my-10",
				header:
					"text-left tracking-widest text-black mb-12 mt-10 before:content-['-__'] before:text-blue-400",
				paragraph: "text-black tracking-wide antialiased mb-8 text-xl font-sans ",
				button: "flex items-start py-6",
			},
			gridCol2: {
				wrapper: "image my-10",
			},
		},
	},
}

//data for container2
export default function Index() {
	return (
		<AppWrapper theme={theme}>
			<Header />

			<ScreenSlider />
			<Container1 data={dataContainer1} />
			<Container2 data={dataContainer2} themeContainer={themeContainer2} />
			<Container3
				data={dataContainer3}
				sliderSettings={sliderSettingsContainer3}
				Template={Template1}
				variant="iconSlider"
			/>
			<Container4 data={dataContainer4} />
			<Container5
				data={dataContainer5}
				sliderSettings={sliderSettingsContainer5}
				Template={CardTemplate}
				variant="cardSlider"
			/>
			<Container6 data={datacontainer6} themeContainer={themeContainer6} />
			<Footer />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
			<BackToTop />
		</AppWrapper>
	)
}
