import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Text } from "@vactory/ui/text"
import { Button } from "@vactory/ui/button"

const Styleguide = () => {
	return (
		<div>
			<Container className="py-16">
				<Heading level="1" className="text-black">
					This is heading level 1
				</Heading>
				<Heading level="2" className="text-black">
					This is heading level 2
				</Heading>
				<Heading level="3" className="text-black">
					This is heading level 3
				</Heading>
				<Heading level="4" className="text-black">
					This is heading level 4
				</Heading>
				<Heading level="5" className="text-black">
					This is heading level 5
				</Heading>
				<Heading level="6" className="text-black">
					This is heading level 6
				</Heading>
			</Container>
		</div>
	)
}

export default Styleguide
