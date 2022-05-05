import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { data } from "./data"

export const Container1 = () => {
	return (
		<Container layout="full" className="flex items-center justify-center bg-gray-1000">
			<Heading
				level={6}
				className="text-left md:text-center font-bold text-gray-400 md:mb-8 px-6 md:ml-40 mt-4 md:mt-12"
			>
				{data.title}
			</Heading>
		</Container>
	)
}
