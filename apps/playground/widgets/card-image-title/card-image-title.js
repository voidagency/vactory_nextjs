import { Card } from "@vactory/ui/card"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { data } from "./mock-data"

export const CardImageTitle = (props) => {
	return (
		<Container className="py-16">
			<Heading level={3} className="text-center mb-[52px] text-gray-900">
				Faire Confiance à Chaabi LLD
			</Heading>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{data.map((item) => {
					return (
						<Card
							key={item.id}
							variant="cardImagetitle"
							title={item.title}
							url={item.url}
							image={
								<img
									src={item.image.src}
									className="h-full object-cover w-full"
									width={item.image.width}
									height={item.image.height}
								/>
							}
						/>
					)
				})}
			</div>
		</Container>
	)
}
