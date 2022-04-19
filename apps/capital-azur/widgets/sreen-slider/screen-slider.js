import { data } from "./data"
import { defaultSettings } from "./data"
import { Slider } from "@vactory/ui/slider"
import { Template } from "./template"
import { Arrow } from "@vactory/ui/arrows"

export const ScreenSlider = ({}) => {
	return (
		<Slider
			list={data}
			settings={defaultSettings}
			Arrow={Arrow}
			variant="default"
			Template={Template}
		></Slider>
	)
}
