import { Container } from "@vactory/ui/container"
import { CardInlineVehicule } from "../../components/card-inline-vehicule/card-inline-vehicule"
import { data as defaultData } from "./mock-data"

export const BlockCardInlineVehicule = ({ data = defaultData }) => {
	return (
		<Container className="py-16">
			<CardInlineVehicule {...data} />
		</Container>
	)
}
