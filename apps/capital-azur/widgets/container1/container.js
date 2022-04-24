import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"

export const Container1 = ({ data }) => {
	return (
		<Container layout="full" className="flex-col">
			<Container className="py-16">
				<Heading
					level={2}
					className="text-left mb-6 mt-10 before:content-['-__'] before:text-indigo-500 "
				>
					{data.title}
				</Heading>
				<p className=" mx-auto lg:mx-32 tracking-wide antialiased text-xl font-sans">
					{data.paragraph}
				</p>
				<div className="flex items-center justify-center py-6">
					<Button variant="primary">{data.button}</Button>
				</div>
			</Container>
		</Container>
	)
}
