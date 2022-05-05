import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { Icon } from "@vactory/ui/icon"
import { dataBanner } from "./data"

export const BlockBanner = () => {
	return (
		<Container layout="full" className="bg-gray-1200">
			<Container layout="banner" className={`flex relative flex-shrink-0 `}>
				{dataBanner.image}
				<div className="container absolute flex-col">
					<Heading level={5} className="text-left text-blue-1000 mb-6 mt-20 ml-2">
						Accueil
					</Heading>
					<div className="flex flex-row">
						<Icon
							id="minus"
							className="mb-6 mt-6 text-blue-1000"
							width="50"
							height="30"
						/>
						<Heading
							level={2}
							className="text-left text-blue-1000 mb-6 mt-6 tracking-wide"
						>
							{dataBanner.title}
						</Heading>
					</div>
				</div>
			</Container>
		</Container>
	)
}
