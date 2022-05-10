import { React } from "react"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Header } from "../components/header/header"
import { Footer } from "@/components/footer/footer"
import { Icon } from "@vactory/ui/icon"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BackToTop } from "@vactory/ui/back-to-top"
import { BlockBanner } from "../widgets/block-banner-nous-connaitre/block-banner"
import { MenuNav } from "../widgets/menu-nav-nous-connaitre/menuNav"
import { BlogImgContainer as Container1 } from "../widgets/capital-azur-content-nous-connaitre/container"
import { ProfileContainer as Container3 } from "../widgets/mot-du-president/container"
import { AccederService } from "../widgets/acceder-nos-services/container"
import { ChiffreSlider } from "@/widgets/capital-azur-chiffre-items-slider/chiffreSliderWidget"
import { Vision } from "@/widgets/capital-azur-vision/visionWidgets"
import { Conseil } from "@/widgets/conseil-administration/conseil"

const tools = [
	{
		id: 0,
		title: "OUVRIR UN COMPTE",
		href: "#",
		icon: "",
	},
	{
		id: 1,
		title: "RECLAMATION",
		href: "#",
		icon: "",
	},
	{
		id: 2,
		title: "FAQ",
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

export default function NousConnaitre() {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<BlockBanner />
			<MenuNav />
			<Container1 href="#container1" />
			<ChiffreSlider href="#container2" variant="chiffreSlider" />
			<Container3 href="#container3" />
			<Vision href="#container4" />
			<Conseil href="#container5" />
			<AccederService />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} variant="default" />
			<BackToTop icon={<Icon id="chevron-up" width="30" height="30" />} />
			<Footer />
		</AppWrapper>
	)
}
