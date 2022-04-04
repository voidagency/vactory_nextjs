import { AppWrapper } from "@vactory/ui/app-wrapper"
import { theme } from "../theme/theme"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Card } from "@vactory/ui/card"
export default function Index() {
	return (
		<AppWrapper theme={theme}>
			<Container className="py-10 flex-col">
				<Heading level={1} className="text-center mb-3">
					This is the index page
				</Heading>
				<Card
					title="This is playground project"
					excerpt="lorem ipsum dolor sit amet, consectetur adip"
					image={
						<img
							className="w-full h-52 object-cover"
							src="https://place-hold.it/100x150"
						/>
					}
					url="/about"
					category="VOID"
					className="max-w-sm"
				/>
			</Container>
		</AppWrapper>
	)
}
