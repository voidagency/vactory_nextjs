import { useContext } from "react"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

import { SlideImage } from "./slide-image"
//import {SlideBgVideo} from "./slide-bg-video";
import { SlideVideo } from "./slide-video"

const Slide = ({
	children,
	isActive = false,
	content = null,
	bgImage = null,
	videoId = null,
	bgVideoId = null,
	className = "",
	variant = "default",
	...props
}) => {
	const { slider } = useContext(ThemeContext)

	return (
		<div
			className={clsx("keen-slider__slide", className, slider[variant].slide.wrapper)}
			{...props}
		>
			{bgImage && <SlideImage variant={variant} imgUrl={bgImage} />}
			{/*bgVideoId && <SlideBgVideo variant={variant} bgVideoId={bgVideoId} />*/}
			{videoId && <SlideVideo variant={variant} videoId={videoId} />}
			{children && <div className={slider[variant].slide.content}>{children}</div>}
		</div>
	)
}

export default Slide
