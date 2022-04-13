import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import Header from "../components/header/header"
import { Slider } from "../components/slider/slider"
import { Footer } from "@/components/footer/footer"
import { ToolBox, MediaBox } from "@/components/toolBox"
import { Button } from "@vactory/ui/button"

export default function Index() {
	return (
		<AppWrapper theme={theme}>
			<Header />
			<Slider />
			<Container className=" flex-col">
				<div className="Container py-10 ml-auto mr-auto">
					<Heading
						level={2}
						className="text-left mb-6 mt-10 before:content-['-__'] before:text-indigo-500 "
					>
						VOTRE SATISFACTION, NOTRE PASSION
					</Heading>
					<p className="px-24">
						Découvrez Capital Azur, la première banque 100% Digitale en Afrique et oubliez
						la paperasse et les frais cachés. Avec tous nos outils dédiés aux besoins de
						tous nos clients (Particuliers, Entreprises, Corporate), Nous vous
						accompagnons chaque jour pour réaliser vos projets de vie.
					</p>
					<div className="text-align-center">
						<Button>A PROPOS DE NOUS</Button>
					</div>
				</div>
			</Container>

			<Footer />
			<div className="fixed invisible md:visible left-8 w-12 bottom-32">
				<MediaBox />
			</div>
			<div className="fixed invisible md:visible right-0 w-48 bottom-36">
				<ToolBox />
			</div>
		</AppWrapper>
	)
}
