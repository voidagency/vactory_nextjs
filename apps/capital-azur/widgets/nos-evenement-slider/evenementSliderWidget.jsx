import { Container } from "@vactory/ui/container"
import { Slider } from "@vactory/ui/slider"
import Slide from "@vactory/ui/slide"
import { TemplateWrapper } from "@/components/template-wrapper/templateWrapper"
import { data } from "./data"
import { sliderSettings } from "./data"
import { CardTemplate } from "@/components/template-slider/index/card-template"
import { Button } from "@vactory/ui/button"

export const EvenementSlider = ({ containerId, variant = "cardSlider" }) => {
	return (
		<Container layout="full" id={containerId} className="flex-col bg-gray-1000">
			<TemplateWrapper data={data}>
				<Slider settings={sliderSettings} variant={variant}>
					{data.dataSlider.map((item, index) => {
						return (
							<Slide key={index} variant={variant}>
								<CardTemplate item={item} variant={variant} key={index} />
							</Slide>
						)
					})}
				</Slider>
				{data.button && (
					<div className="flex items-center justify-center my-8">
						<Button outline="true" Variant="primary" size="large">
							{data.button}
						</Button>
					</div>
				)}
			</TemplateWrapper>
		</Container>
	)
}
