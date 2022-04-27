import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Header } from "../components/header/header"
import { Footer } from "@/components/footer/footer"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BackToTop } from "@vactory/ui/back-to-top"
import { BlockBanner } from "../widgets/nous-connaitre-block-banner/block-banner"
import { MenuNav } from "../widgets/menu-nav-nous-connaitre/menuNav"
import { BlogImgContainer as Container1 } from "../widgets/capital-azur-content-nous-connaitre/container"
import { ProfileContainer as Container3 } from "../widgets/mot-du-president/container"
import { AccederService } from "../widgets/acceder-nos-services/container"
import { ChiffreSlider } from "@/widgets/capital-azur-chiffre-items-slider/chiffreSliderWidget"
import { Vision } from "@/widgets/capital-azur-vision/visionWidgets"
import { Conseil } from "@/widgets/conseil-administration/conseil"

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

export default function NousConnaitre() {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<BlockBanner />
			<MenuNav />
			<Container1 containerId="#container1" />
			<ChiffreSlider containerId="#container2" variant="chiffreSlider" />
			<Container3 containerId="#container3" />
			<Vision containerId="#container4" />
			<Conseil containerId="#container4" />
			<AccederService />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
			<BackToTop />
			<Footer />
		</AppWrapper>
	)
}
