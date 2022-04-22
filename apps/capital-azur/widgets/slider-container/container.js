import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Slider } from "@vactory/ui/slider"
import Slide from "@vactory/ui/slide"

export const Container5 = ({ data, SliderSettings, Template }) => {
	return (
		<Container layout="full" className="flex-col bg-gray-1000">
			<Container className="py-16">
				<Heading
					level={2}
					className="text-left mb-10 mt-10 tracking-wide before:content-['-__'] before:text-indigo-500 "
				>
					{data.title}
				</Heading>
				<div className="">
					<Slider settings={SliderSettings} variant="cardSlider">
						{data.cardSliderData.map((item, index) => {
							return (
								<Slide key={index} variant="cardSlider">
									<Template item={item} variant="cardSlider" key={index} />
								</Slide>
							)
						})}
					</Slider>
				</div>
			</Container>
		</Container>
	)
}
