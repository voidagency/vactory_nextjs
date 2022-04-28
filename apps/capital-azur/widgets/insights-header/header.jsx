import { Heading } from "@vactory/ui/heading"
import { Container } from "@vactory/ui/container"
import { data } from "./data"

export const Container1 = () => {
	return (
		<Container layout="full" className="flex items-center justify-center bg-gray-1000">
			<Heading
				level={6}
				className="text-left md:text-center font-bold text-gray-400 mb-16 mx-4 md:mx-28 mt-12"
			>
				{data.title}
			</Heading>
		</Container>
	)
}
