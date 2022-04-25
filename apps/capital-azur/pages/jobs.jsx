import React from "react"

import JobsWidget from "@/widgets/jobs/jobsWidget"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"

import { Container } from "@vactory/ui/container"
import { AppWrapper } from "@vactory/ui/app-wrapper"

import { theme } from "../theme/theme"

export const Jobs = () => {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<Container variant={"default"} className="my-12">
				<JobsWidget />
			</Container>
			<Footer />
		</AppWrapper>
	)
}

export default Jobs
