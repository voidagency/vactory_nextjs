import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"
import { data } from "./data"

export const Container1 = ({}) => {
	return (
		<Container layout="full" className="flex-col">
			<Container className="py-6 md:py-16">
				<div className="flex flex-row">
					<Icon
						id="minus"
						className="mb-4 md:mb-6 md:mt-10 text-blue-1000"
						width="60"
						height="30"
					/>
					<Heading level={2} className="text-left mb-4 md:mb-6 md:mt-10 ">
						{data.title}
					</Heading>
				</div>

				<p className="md:px-24 lg:mx-auto tracking-wide antialiased text-md font-sans text-gray-500">
					{data.description}
				</p>
				<div className="flex items-center justify-center py-6">
					<Button variant="primary" className="bg-blue-1000 font-semibold px-4">
						{data.button}
					</Button>
				</div>
			</Container>
		</Container>
	)
}
