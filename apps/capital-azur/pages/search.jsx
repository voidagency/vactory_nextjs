import { SearchWidget } from "@/widgets/search/searchWidget"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BackToTop } from "@vactory/ui/back-to-top"
import { Icon } from "@vactory/ui/icon"
import { theme } from "../theme/theme"
import { Container } from "@vactory/ui/container"
import { Header } from "@/components/header/header"
import { BlockBanner } from "@/widgets/block-banner-search/block-banner"
import { Footer } from "@/components/footer/footer"

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

export const Search = () => {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<BlockBanner />
			<Container layout="full" className="py-10 bg-gray-10">
				<SearchWidget />
			</Container>
			<Footer />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
			<BackToTop icon={<Icon id="chevron-up" width="30" height="30" />} />
		</AppWrapper>
	)
}

export default Search
