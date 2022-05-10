import React from "react"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { BlockBanner } from "@/widgets/block-banner-produits-services/block-banner"
import { ProduitService } from "@/widgets/produit-service/produitServiceList"
import { Container } from "@vactory/ui/container"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { AccederService } from "../widgets/acceder-nos-services/container"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BackToTop } from "@vactory/ui/back-to-top"
import { Icon } from "@vactory/ui/icon"
import { theme } from "../theme/theme"

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

export const ProduitsServices = () => {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<BlockBanner />
			<Container className="py-16">
				<ProduitService />
			</Container>
			<AccederService />
			<Footer />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} variant="default" />
			<BackToTop icon={<Icon id="chevron-up" width="30" height="30" />} />
		</AppWrapper>
	)
}

export default ProduitsServices
