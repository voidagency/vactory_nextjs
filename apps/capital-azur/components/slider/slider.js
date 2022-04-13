import React, { useState } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react" // import from 'keen-slider/react.es' for to get an ES module
import { Icon } from "@vactory/ui/icon"
import { Arrow } from "./arrows"
import { Button } from "@vactory/ui/button"

export const Slider = ({ list, settings, Template }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		loop: settings.loop,
		rtl: settings.rtl,
		disabled: settings.disabled,
		rubberband: settings.rubberband,
		renderMode: settings.renderMode,
		defaultAnimation: {
			duration: settings.defaultAnimation.duration,
		},

		slideChanged(Slider) {
			setCurrentSlide(Slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		},
	})

	return (
		<>
			<div className="navigation-wrapper h-128 w-full ">
				<div ref={sliderRef} className="keen-slider w=full h-full">
					{list.map((item) => {
						return (
							<div
								key={item.id}
								className="keen-slider__slide number-slide z-0 h-full w-full  rounded-xl"
								style={{ backgroundImage: `url(${item.image})` }}
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
							iconLeft={
								<Icon
									id="chevron-left"
									className="text-indigo-700"
									width="30"
									height="30"
								/>
							}
							onClick={(e) => instanceRef.current?.prev()}
						/>

						<Arrow
							right
							iconRight={
								<Icon
									id="chevron-right"
									className="text-indigo-700"
									width="30"
									height="30"
								/>
							}
							onClick={(e) => instanceRef.current?.next()}
						/>
					</>
				)}

				{loaded && instanceRef.current && (
					<div className="dots flex items-center justify-center bottom-10 right-1/2 left-1/2 ">
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
											"dot w-2 h-2 bg-slate-500 md:px-20 p-2 md:p-1 cursor-pointer border-current rounded-full focus:outline-none" +
											(currentSlide === idx
												? " active bg-blue-700 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 "
												: "")
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
