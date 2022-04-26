import { Container } from "@vactory/ui/container"
import { Slider } from "@vactory/ui/slider"
import Slide from "@vactory/ui/slide"
import { TemplateWrapper } from "@/components/template-wrapper/templateWrapper"
import { data } from "./data"
import { sliderSettings } from "./data"
import { IconTemplate } from "@/components/template-slider/index/icon-template"

export const ServiceSlider = ({ containerId, variant = "iconSlider" }) => {
	return (
		<Container layout="full" id={containerId} className="flex-col bg-gray-1000">
			<TemplateWrapper data={data}>
				<Slider settings={sliderSettings} variant={variant}>
					{data.dataSlider.map((item, index) => {
						return (
							<Slide key={index} variant={variant}>
								<IconTemplate item={item} variant={variant} key={index} />
							</Slide>
						)
					})}
				</Slider>
			</TemplateWrapper>
		</Container>
	)
}
