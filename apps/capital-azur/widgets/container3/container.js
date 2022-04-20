import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Slider } from "@vactory/ui/slider"
import { Arrow } from "@vactory/ui/arrows"
import { DataSlider2 } from "./data"
import { SliderIconSettings } from "./data"
import { Template1 } from "./Template"
import Slide from "@vactory/ui/slide"

export const Container3 = ({}) => {
	return (
		<Container layout="full" className="flex-col bg-gray-1000">
			<Container className="py-16">
				<Heading
					level={2}
					className="text-left mb-10 mt-10 tracking-wide before:content-['-__'] before:text-indigo-500 "
				>
					DES SERVICES INNOVANTS POUR UN QUOTIDIEN SIMPLIFIÉ.
				</Heading>
				<p className="mx-auto lg:mx-32 mb-16 tracking-wide antialiased text-xl font-sans">
					Capital Azur accompagne l’ensemble de sa clientèle dans leurs projets à toutes
					les étapes de leurs vie.
				</p>
				<div className="">
					<Slider settings={SliderIconSettings} variant="iconSlider">
						{DataSlider2.map((item, index) => {
							console.log("ITEM IMAGE", item)
							return (
								<Slide key={index} variant="iconSlider" className="py-8">
									<Template1 {...item} />
								</Slide>
							)
						})}
					</Slider>
				</div>
			</Container>
		</Container>
	)
}
