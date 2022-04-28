import { Header } from "../components/header/header"
import { Footer } from "@/components/footer/footer"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BackToTop } from "@vactory/ui/back-to-top"
import { ScreenSlider } from "../widgets/sreen-slider/screen-slider"
import { Container1 } from "../widgets/votre-satisfaction-notre-passion/container"
import { Container2 } from "../widgets/les-fintechs-au-service-de-la-croissance-en-afrique/container"
import { InsightCard as Container4 } from "../widgets/insights-index/insightWidght"
import { AccederService } from "../widgets/acceder-nos-services/container"
import { ServiceSlider } from "@/widgets/des-servicesinnovants-slider/serviceSliderWidget"
import { EvenementSlider } from "@/widgets/nos-evenement-slider/evenementSliderWidget"

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

export default function Index() {
	return (
		<div>
			<Header />
			<ScreenSlider />
			<Container1 />
			<Container2 />
			<ServiceSlider />
			<Container4 />
			<EvenementSlider />
			<AccederService />
			<Footer />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
			<BackToTop />
		</div>
	)
}
