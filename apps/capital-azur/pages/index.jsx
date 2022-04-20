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
import { Container5 } from "../widgets/container5/container"
import { Container6 } from "../widgets/container6/container"

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
			<Container3 />
			<Container4 />
			<Container5 />
			<Container6 />

			<Footer />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
			<BackToTop />
		</div>
	)
}
