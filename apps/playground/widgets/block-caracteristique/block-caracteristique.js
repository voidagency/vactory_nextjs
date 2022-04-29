import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { data } from "./mock-data"

export const BlockCaracteristique = ({
	title = data.title,
	marque = data.marque,
	modele = data.modele,
	transmission = data.transmission,
	puissance = data.puissance,
	number_key = data.number_key,
	date_circulation = data.date_circulation,
	kilometrage = data.kilometrage,
	carburant = data.carburant,
	...props
}) => {
	return (
		<Container>
			<Heading level="2" variant="4" className="mb-[49px]">
				{title}
			</Heading>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<Caracteristique title="Marque" content={marque} />
				<Caracteristique title="modele" content={modele} />
				<Caracteristique title="transmission" content={transmission} />
				<Caracteristique title="puissance" content={puissance} />
				<Caracteristique title="Nombre de clés" content={number_key} />
				<Caracteristique title="Date de mise en circulation" content={date_circulation} />
				<Caracteristique title="kilometrage" content={kilometrage} />
				<Caracteristique title="Type de carburant" content={carburant} />
			</div>
		</Container>
	)
}

const Caracteristique = ({ title, content }) => {
	return (
		<div className="mb-[70px]">
			<Text as="h3" variant="body1" className="text-gray-500 mb-2">
				{title}
			</Text>
			<Text variant="body1">{content}</Text>
		</div>
	)
}
