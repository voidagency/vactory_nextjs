import React, { useState } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react" // import from 'keen-slider/react.es' for to get an ES module
import { Icon } from "@vactory/ui/icon"
import { FullImageSlider } from "./fullBackgroundSlider"
import { Button } from "@vactory/ui/button"

export const Slider = (data) => {
	const images = [
		"https://capital-azur.com/sites/default/files/2020-12/slider-pro.jpg",
		"https://capital-azur.com/sites/default/files/2020-05/1.jpg",
		"https://capital-azur.com/sites/default/files/2020-05/2.jpg",
		"https://capital-azur.com/sites/default/files/2020-05/gerer-mon-epargne.jpg",
	]

	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		loop: true,
		defaultAnimation: {
			duration: 3000,
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
			<div className="navigation-wrapper  h-128 w-full">
				<div ref={sliderRef} className="keen-slider w=full h-full">
					{images.map((n, index) => {
						return (
							<FullImageSlider key={index} item={n} isActive={currentSlide === index} />
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
			</div>
			{loaded && instanceRef.current && (
				<div className="dots flex items-center justify-center py-2.5 -bottom-10 right-1/2 left-1/2 ">
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
										"dot w-2 h-2 bg-gray-400 sm:px-16 p-2 sm:p-1 cursor-pointer border-current rounded-full my-0 mx-1.5 focus:outline-none" +
										(currentSlide === idx
											? " active bg-indigo-700 p-2  sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 "
											: "")
									}
								></Button>
							)
						}
					)}
				</div>
			)}
		</>
	)
}

// to add to ui package
const Arrow = (props) => {
	return (
		<Button
			onClick={props.onClick}
			variant="nav"
			className={`arrow invisible sm:visible absolute  sm:translate-y-1/2 items-center justify-center bottom-10   sm:bottom-1/2  sm:cursor-pointer py-4 px-4 sm:rounded-full  sm:transition sm:ease-in-out sm:delay-200 ${
				props.left ? "arrow--left left-12 " : "arrow--right right-12 "
			} `}
		>
			{props.left && props.iconLeft}
			{props.right && props.iconRight}

			<svg
				className="fill-indigo-700 rtl:transform rtl:rotate-180"
				viewBox="0 0 50 50"
				xmlns="http://www.w3.org/2000/svg"
				height="50"
				width="50"
			>
				{props.left && (
					<path d="M13,26a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L5.41,16l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,13,26Z" />
				)}
				{props.right && (
					<path d="M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z" />
				)}
			</svg>
		</Button>
	)
}
