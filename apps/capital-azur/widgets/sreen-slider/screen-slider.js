import { data } from "./data"
import { defaultSettings } from "./data"
import { Slider } from "@vactory/ui/slider"
import { Template } from "./template"
import { Arrow } from "@vactory/ui/arrows"
import Slide from "@vactory/ui/slide"

export const ScreenSlider = ({}) => {
	return (
		<Slider settings={defaultSettings} variant="default" Template={Template}>
			{data.map((item, index) => {
				return (
					<Slide key={index} bgImage={item.image}>
						<Template item={item} isActive={true} />
					</Slide>
				)
			})}
		</Slider>
	)
}
