import React, { useState, useContext } from "react"
//import "keen-slider/keen-slider.min.css" //comment this to run it in apps
import { useKeenSlider } from "keen-slider/react" // import from 'keen-slider/react.es' for to get an ES module
import { Icon } from "@vactory/ui/icon"
import { Button } from "@vactory/ui/button"
import clsx from "clsx"
import { ThemeContext } from "@vactory/ui/theme-context"

export const Slider = ({ list, settings, Template, Arrow, variant }) => {
	const [opacities, setOpacities] = React.useState([])
	const { slider } = useContext(ThemeContext)
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: list.length,
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
			<div className={clsx(slider[variant].wrapper)}>
				<div ref={sliderRef} className={slider[variant].carousel}>
					{list.map((item) => {
						return (
							<div
								key={item.id}
								className={slider[variant].slider.wrapper}
								style={{
									backgroundImage: `url(${item.image})`,
									opacity: `${settings.opacity && opacities[item.id]}`,
								}}
							>
								<Template item={item} isActive={currentSlide === item.id} />
							</div>
						)
					})}
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrow
							left
							variant={variant}
							iconLeft={
								<Icon
									id="chevron-left"
									className={slider[variant].Arrows}
									width="30"
									height="30"
								/>
							}
							onClick={(e) => instanceRef.current?.prev()}
						/>

						<Arrow
							right
							variant={variant}
							iconRight={
								<Icon
									id="chevron-right"
									className={slider[variant].Arrows}
									width="30"
									height="30"
								/>
							}
							onClick={(e) => instanceRef.current?.next()}
						/>
					</>
				)}

				{loaded && instanceRef.current && (
					<div className={slider[variant].Dotes.wrapper}>
						{[...Array(instanceRef.current.track.details.slides.length).keys()].map(
							(idx) => {
								return (
									<Button
										key={idx}
										onClick={() => {
											instanceRef.current?.moveToIdx(idx)
										}}
										variant="nav"
										className={
											slider[variant].Dotes.dot +
											(currentSlide === idx ? slider[variant].Dotes.dotActive : "")
										}
									></Button>
								)
							}
						)}
					</div>
				)}
			</div>
		</>
	)
}
