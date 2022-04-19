import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"

export const Container1 = ({}) => {
	return (
		<Container layout="full" className="flex-col">
			<div className="Container px-4 lg:px-32 py-24 ml-auto mr-auto">
				<Heading
					level={2}
					className="text-left mb-6 mt-10 before:content-['-__'] before:text-blue-1000 "
				>
					VOTRE SATISFACTION, NOTRE PASSION
				</Heading>
				<p className=" mx-auto lg:mx-32 tracking-wide antialiased text-xl font-sans">
					Découvrez Capital Azur, la première banque 100% Digitale en Afrique et oubliez
					la paperasse et les frais cachés. Avec tous nos outils dédiés aux besoins de
					tous nos clients (Particuliers, Entreprises, Corporate), Nous vous accompagnons
					chaque jour pour réaliser vos projets de vie.
				</p>
				<div className="flex items-center justify-center py-6">
					<Button size="large">A PROPOS DE NOUS</Button>
				</div>
			</div>
		</Container>
	)
}
