import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Slider } from "@vactory/ui/slider"
import { Arrow } from "@vactory/ui/arrows"
import { DataSlider2 } from "./data"
import { SliderIconSettings } from "./data"
import { Template1 } from "./Template"

export const Container3 = ({}) => {
	return (
		<Container layout="full" className="flex-col bg-gray-1000">
			<div className="Container px-4 lg:px-32  py-16 ml-auto mr-auto">
				<Heading
					level={2}
					className="text-left mb-10 mt-10 tracking-wide before:content-['-__'] before:text-blue-1000 "
				>
					DES SERVICES INNOVANTS POUR UN QUOTIDIEN SIMPLIFIÉ.
				</Heading>
				<p className="mx-auto lg:mx-32 mb-16 tracking-wide antialiased text-xl font-sans">
					Capital Azur accompagne l’ensemble de sa clientèle dans leurs projets à toutes
					les étapes de leurs vie.
				</p>
				<div className="">
					<Slider
						list={DataSlider2}
						settings={SliderIconSettings}
						Arrow={Arrow}
						variant="iconSlider"
						Template={Template1}
					></Slider>
				</div>
			</div>
		</Container>
	)
}
