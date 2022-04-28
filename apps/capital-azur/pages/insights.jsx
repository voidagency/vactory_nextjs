import React from "react"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"

import { BlockBanner } from "@/widgets/insights-block-banner/block-banner"
import { Container1 } from "@/widgets/insights-header/header"
import { AppWrapper } from "@vactory/ui/app-wrapper"

import { theme } from "../theme/theme"
import InsightsWidget from "@/widgets/insights/insightsWidget"

export default function Insights() {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<BlockBanner />
			<Container1 />
			<InsightsWidget />

			<Footer />
		</AppWrapper>
	)
}
