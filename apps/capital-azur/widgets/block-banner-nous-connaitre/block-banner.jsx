import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { dataBanner } from "./data"

export const BlockBanner = () => {
	return (
		<Container layout="full" className="">
			<div className="flex relative flex-shrink-0 bg-gray-1200">
				{dataBanner.image}
				<div className="container absolute flex-col md:mx-16 px-10">
					<Heading level={5} className="text-left text-blue-1000 mb-6 mt-24">
						Accueil
					</Heading>
					<Heading
						level={2}
						className="text-left text-blue-1000 mb-6 mt-10 before:content-['-__'] before:text-blue-1000 "
					>
						{dataBanner.title}
					</Heading>
				</div>
			</div>
		</Container>
	)
}
