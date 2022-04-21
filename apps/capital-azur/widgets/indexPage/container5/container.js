import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Slider } from "@vactory/ui/slider"
import { cardSliderData } from "./data"
import { SliderCardSettings } from "./data"
import { CardTemplate } from "./template"
import Slide from "@vactory/ui/slide"

export const Container5 = ({}) => {
	return (
		<Container layout="full" className="flex-col bg-gray-1000">
			<Container className="py-16">
				<Heading
					level={2}
					className="text-left mb-10 mt-10 tracking-wide before:content-['-__'] before:text-indigo-500 "
				>
					NOS ÉVÉNEMENTS PARTOUT DANS LE MONDE
				</Heading>
				<div className="">
					<Slider settings={SliderCardSettings} variant="cardSlider">
						{cardSliderData.map((item, index) => {
							return (
								<Slide key={index} variant="cardSlider">
									<CardTemplate item={item} variant="cardSlider" key={index} />
								</Slide>
							)
						})}
					</Slider>
				</div>
			</Container>
		</Container>
	)
}
