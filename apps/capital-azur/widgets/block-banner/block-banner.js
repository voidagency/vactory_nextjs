import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"

export const BlockBanner = () => {
	return (
		<Container layout="full" className="">
			<div className="flex relative flex-shrink-0 bg-gray-1200">
				<img
					src="https://capital-azur.com/sites/default/files/styles/banner_1280_155/public/2020-05/cp-banner-1.png?h=45fedb52"
					className="top-0 left-0 w-full h-64 object-cover"
				/>
				<div className="container absolute flex-col md:mx-16 px-10">
					<Heading level={5} className="text-left text-blue-1000 mb-6 mt-24">
						Accueil
					</Heading>
					<Heading
						level={2}
						className="text-left text-blue-1000 mb-6 mt-10 before:content-['-__'] before:text-blue-1000 "
					>
						NOUS CONNAITRE
					</Heading>
				</div>
			</div>
		</Container>
	)
}
