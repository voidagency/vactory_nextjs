import React from "react"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BlockBanner } from "@/widgets/block-banner-insights/block-banner"
import { BackToTop } from "@vactory/ui/back-to-top"
import { Container1 } from "@/widgets/insights-header/header"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { Icon } from "@vactory/ui/icon"
import { theme } from "../theme/theme"
import InsightsWidget from "@/widgets/insights/insightsWidget"

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

export default function Insights() {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<BlockBanner />
			<Container1 />
			<InsightsWidget />
			<Footer />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
			<BackToTop icon={<Icon id="chevron-up" width="30" height="30" />} />
		</AppWrapper>
	)
}
