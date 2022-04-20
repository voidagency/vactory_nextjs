import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"

export const Container1 = ({}) => {
	return (
		<Container layout="full" className="flex-col">
			<Container className="py-16">
				<Heading
					level={2}
					className="text-left mb-6 mt-10 before:content-['-__'] before:text-indigo-500 "
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
					<Button variant="primary">A PROPOS DE NOUS</Button>
				</div>
			</Container>
		</Container>
	)
}
