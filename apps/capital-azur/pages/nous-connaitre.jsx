import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Header } from "../components/header/header"
import { Footer } from "@/components/footer/footer"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BackToTop } from "@vactory/ui/back-to-top"
import { BlockBanner } from "../widgets/block-banner/block-banner"
import { MenuNav } from "../widgets/menu-nav/container"
import { BlogImgContainer as Container1 } from "../widgets/blogImage-container/container"
import { ContainerSlider as Container2 } from "../widgets/slider-container/container"
import {
	dataSlider,
	sliderSettings,
} from "../widgets/slider-container/data/data-nousConnaitre/nous-connaitreSlider"
import { TemplateSlider } from "../widgets/slider-container/template/template-nousConnaitre/template"
import { ProfileContainer as Container3 } from "../widgets/profil-container/container"
import { BlogImgContainer as Container4 } from "../widgets/blogImage-container/container"
import { cardContainer as Container5 } from "../widgets/card-container/container"
import { dataCard as dataContainer5 } from "../widgets/card-container/data/data-nousConnaitre"
import { BlogImgContainer as Container6 } from "../widgets/blogImage-container/container"

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

const datacontainer1 = {
	title: "Capital Azur, la première banque 100% Digitale en Afrique",
	paragraph:
		"Chez Capital Azur, nous nous sommes convaincus qu’une banque doit s’adapter à vos besoins et à votre quotidien. Pour cette raison, nous proposons une expérience bancaire 100 % digitale, pensée pour être simple et transparente. Nos outils, conçus grâce aux technologies les plus innovantes, ont été pensés pour nos utilisateurs pour vous permettre de réaliser vos projets de vie et vous offrir une expérience bancaire agréable, qui vous correspond.",
	button: "",
	image: (
		<img
			className=""
			src={"https://capital-azur.com/sites/default/files/2020-05/Group%2021.png"}
			alt="Workflow"
			height="540px"
			width="515px"
		/>
	),
}

const datacontainer4 = {
	title: "UNE BANQUE AVEC UNE VISION POUR L'AFRIQUE",
	paragraph:
		"Yohan Lebah et Hassan Hajjaj ont fondé Capital Azur en 2017 pour révolutionner un paysag bancaire africain dépassé et inadapté aux changements profonds que connaît notre continent. Leur vision était de disrupter la façon dont les particuliers et les entreprises africaines accèdent aux produits financiers grâce à la Fintech et aux dernières technologies, pour améliorer leur expérience bancaire au quotidien. Depuis, Capital Azur poursuit sa croissance pour changer le quotidien de ses clients et soutenir la croissance en Afrique. Aujourd’hui, plus de 300 personnes de 20 nationalités différentes travaillent dans l’un de nos 3 bureaux à Casablanca, Accra et Dakar.",
	button: "",
	image: (
		<img
			className=""
			src="https://capital-azur.com/sites/default/files/2020-05/Group%2036.png"
			alt="Workflow"
			height="600px"
			width="515px"
		/>
	),
}

const themeContainer1 = {
	wrapper: "bg-pink-10",
	container: {
		wrapper: "Container px-4 lg:px-32",
		grid: {
			wrapper: "grid md:grid-cols-2",
			gridCol1: {
				wrapper: "md:order-last mt-16",
				header:
					"text-left tracking-widest text-blue-1000 mb-12 mt-10 before:content-['-__'] before:text-blue-1000",
				paragraph: "text-blue-1000 tracking-wide antialiased mb-8 text-xl font-sans",
				button: "flex items-center justify-center py-6",
			},
			gridCol2: {
				wrapper: "image mt-16",
			},
		},
	},
}

const themeContainer4 = {
	wrapper: "bg-blue-1000",
	container: {
		wrapper: "Container px-4 lg:px-32",
		grid: {
			wrapper: "grid md:grid-cols-2",
			gridCol1: {
				wrapper: "pt-6",
				header:
					"text-left tracking-widest text-white mb-6 mt-10 before:content-['-__'] before:text-white",
				paragraph: "text-white tracking-wide antialiased mb-6 text-xl font-sans",
				button: "",
			},
			gridCol2: {
				wrapper: "image px-6 pt-16 ",
			},
		},
	},
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

export default function NousConnaitre() {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<BlockBanner />
			<MenuNav />
			<Container1
				data={datacontainer1}
				themeContainer={themeContainer1}
				containerId="#container1"
			/>
			<Container2
				data={dataSlider}
				sliderSettings={sliderSettings}
				Template={TemplateSlider}
				variant="cardSlider"
			/>
			<Container3 containerId="#container3" />
			<Container4
				data={datacontainer4}
				themeContainer={themeContainer4}
				containerId="#container4"
			/>
			<Container5 data={dataContainer5} />
			<Container6 data={datacontainer6} themeContainer={themeContainer6} />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
			<BackToTop />
			<Footer />
		</AppWrapper>
	)
}
