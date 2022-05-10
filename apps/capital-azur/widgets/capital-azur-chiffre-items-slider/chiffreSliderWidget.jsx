import { Container } from "@vactory/ui/container"
import { Slider } from "@vactory/ui/slider"
import Slide from "@vactory/ui/slide"
import { TemplateWrapper } from "@/components/template-wrapper/templateWrapper"
import { data, sliderSettings } from "./data"
import { Template } from "@/components/template-slider/nous-connaitre/template"
import { Button } from "@vactory/ui/button"
import { Icon } from "@vactory/ui/icon"

export const ChiffreSlider = ({ variant }) => {
	return (
		<Container layout="chiffreSlider" id="container2" className="flex-colbg-gray-1000">
			<TemplateWrapper data={data}>
				<Slider settings={sliderSettings} variant={variant}>
					{data.dataSlider.map((item, index) => {
						return (
							<Slide key={index} variant={variant}>
								<Template item={item} variant={variant} key={index} />
							</Slide>
						)
					})}
				</Slider>
				{data.button && (
					<div className="flex items-center justify-center my-8">
						<Button
							icon={<Icon id={data.buttonIcon} width="15" height="15" />}
							Variant="primary"
							size="large"
							className="bg-blue-1000"
						>
							{data.button}
						</Button>
					</div>
				)}
			</TemplateWrapper>
		</Container>
	)
}
