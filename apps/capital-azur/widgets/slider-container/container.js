import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Slider } from "@vactory/ui/slider"
import Slide from "@vactory/ui/slide"
import { Button } from "@vactory/ui/button"

export const ContainerSlider = ({
	data,
	sliderSettings,
	Template,
	containerId,
	variant,
}) => {
	return (
		<Container layout="full" id={containerId} className="flex-col bg-gray-1000">
			<Container className="py-16">
				{data?.title && (
					<Heading
						level={2}
						className="text-left mb-10 mt-10 tracking-wide before:content-['-__'] before:text-indigo-500 "
					>
						{data.title}
					</Heading>
				)}
				{data?.paragraph && (
					<p className="mx-auto lg:mx-32 mb-16 tracking-wide antialiased text-xl font-sans">
						{data.paragraph}
					</p>
				)}
				<div className="">
					<Slider settings={sliderSettings} variant={variant}>
						{data.dataSlider.map((item, index) => {
							return (
								<Slide key={index} variant={variant}>
									<Template item={item} variant={variant} key={index} />
								</Slide>
							)
						})}
					</Slider>
					{data?.Button && (
						<div className="flex items-center justify-center mt-12 ">
							<Button icon={data.buttonIcon}>{data.button}</Button>
						</div>
					)}
				</div>
			</Container>
		</Container>
	)
}
