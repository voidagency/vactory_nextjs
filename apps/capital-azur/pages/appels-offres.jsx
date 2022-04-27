import React, { useState } from "react"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"

import { Container } from "@vactory/ui/container"
import { AppWrapper } from "@vactory/ui/app-wrapper"
import { Layer } from "@vactory/ui/layer"

import AppelOffreList from "../widgets/appel-offre/appelOffreList/appelOffreList"

import { theme } from "../theme/theme"

const AppelsOffres = () => {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<Container className="my-12">
				<AppelOffreList />
			</Container>
			<Footer />
		</AppWrapper>
	)
}

export default AppelsOffres
