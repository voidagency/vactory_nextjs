import React, { useState } from "react"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"

import { Container } from "@vactory/ui/container"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { ToolBox } from "@vactory/ui/toolbox"
import { MediaBox } from "@vactory/ui/socialmediabox"
import { BackToTop } from "@vactory/ui/back-to-top"
import { Icon } from "@vactory/ui/icon"
import { BlockBanner } from "@/widgets/block-banner-appels-offres/block-banner"

import { ThemeToggler } from "@/components/themeToggler"

import AppelOffreList from "../widgets/appel-offre/appelOffreList/appelOffreList"

import { theme } from "../theme/theme"

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
const AppelsOffres = () => {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<BlockBanner />
			<Container className="my-12">
				<AppelOffreList />
			</Container>
			<Footer />
			<MediaBox list={socialmedia} />
			<ToolBox list={tools} />
			<BackToTop icon={<Icon id="chevron-up" width="30" height="30" />} />
		</AppWrapper>
	)
}

export default AppelsOffres
