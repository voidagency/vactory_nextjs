import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Slider } from "@vactory/ui/slider"
import { Arrow } from "@vactory/ui/arrows"
import { cardSliderData } from "./data"
import { SliderCardSettings } from "./data"
import { CardTemplate } from "./template"

export const Container5 = ({}) => {
	return (
		<Container layout="full" className="flex-col bg-gray-1000">
			<div className="Container px-4 lg:px-32  py-16 ml-auto mr-auto">
				<Heading
					level={2}
					className="text-left mb-10 mt-10 tracking-wide before:content-['-__'] before:text-indigo-500 "
				>
					NOS ÉVÉNEMENTS PARTOUT DANS LE MONDE
				</Heading>
				<div className="">
					<Slider
						list={cardSliderData}
						settings={SliderCardSettings}
						Arrow={Arrow}
						variant="cardSlider"
						Template={CardTemplate}
					></Slider>
				</div>
			</div>
		</Container>
	)
}
