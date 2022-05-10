import { Header } from "../components/header/header"
import { Footer } from "@/components/footer/footer"
import { Icon } from "@vactory/ui/icon"
import { theme } from "../theme/theme"
import { AppWrapper } from "@vactory/ui/app-wrapper"
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
	{ id: "facebook-solid", href: "#" },
	{ id: "twitter-solid", href: "#" },
	{ id: "youtube-solid", href: "#" },
	{ id: "linkedin-solid", href: "#" },
]

export default function Index() {
	return (
		<AppWrapper theme={theme}>
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
			<BackToTop icon={<Icon id="chevron-up" width="30" height="30" />} />
		</AppWrapper>
	)
}
