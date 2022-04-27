import React, { useState, useContext } from "react"
import { useKeenSlider } from "keen-slider/react" // import from 'keen-slider/react.es' for to get an ES module
import { Icon } from "@vactory/ui/icon"
import { Button } from "@vactory/ui/button"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"
import { Arrows } from "./arrows"

//import "./style.css";

export const Slider = ({
	list,
	settings,
	children,
	Template,
	arrowLeft = null,
	arrowRight = null,
	variant,
}) => {
	const [opacities, setOpacities] = React.useState([])
	const { slider } = useContext(ThemeContext)
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		//slides: list.length,
		loop: settings.loop,
		rtl: settings.rtl,
		disabled: settings.disabled,
		rubberband: settings.rubberband,
		renderMode: settings.renderMode,
		defaultAnimation: {
			duration: settings.defaultAnimation.duration,
		},

		breakpoints: settings.breakpoints,

		slideChanged(Slider) {
			setCurrentSlide(Slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		},

		detailsChanged(slider) {
			const new_opacities = slider.track.details.slides.map((slide) => slide.portion)
			setOpacities(new_opacities)
		},
	})

	return (
		<>
			<div className="relative">
				<div ref={sliderRef} className={clsx("keen-slider", slider[variant].wrapper)}>
					{children}
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrows left variant={variant} onClick={(e) => instanceRef.current?.prev()} />

						<Arrows
							right
							variant={variant}
							onClick={(e) => instanceRef.current?.next()}
						/>
					</>
				)}

				{loaded && instanceRef.current && (
					<div className={slider[variant].dots.wrapper}>
						{[...Array(instanceRef.current.track.details.slides.length).keys()].map(
							(idx) => {
								return (
									<button
										key={idx}
										onClick={() => {
											instanceRef.current?.moveToIdx(idx)
										}}
										variant="none"
										className={clsx(
											slider[variant].dots.dot,
											currentSlide === idx && slider[variant].dots.dotActive
										)}
									></button>
								)
							}
						)}
					</div>
				)}
			</div>
		</>
	)
}
