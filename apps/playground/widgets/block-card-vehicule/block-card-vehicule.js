import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"
import { CardVehicule } from "../../components/card-vehicule/card-vehicule"

import { data as defaultData } from "./mock-data"

export const BlockCardVehicule = ({ data = defaultData, url, urlTitle }) => {
	return (
		<Container className="py-16">
			<Heading level="3" className="text-center text-gray-900 mb-[52px]">
				Offre populaires
			</Heading>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{data.map((item) => {
					return <CardVehicule key={item.id} {...item} />
				})}
			</div>
			{url && urlTitle && (
				<div className="text-center mt-11 lg:mt-[57px]">
					<Button variant="primary" className="w-full lg:w-auto" href={url}>
						{urlTitle}
					</Button>
				</div>
			)}
		</Container>
	)
}
