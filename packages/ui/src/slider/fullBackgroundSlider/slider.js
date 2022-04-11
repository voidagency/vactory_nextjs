import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react.es"
import "keen-slider/keen-slider.min.css"
import { FullBackgroundSlider } from "./fullBackgroundSlider"
//import "./style.css"

const images = [
	"https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
	"https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
	"https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
	"https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
]

export const Slider = (items) => {
	const [opacities, setOpacities] = React.useState([])
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: images.length,
		loop: true,
		defaultAnimation: {
			duration: 4000,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
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
			<div className="navigation-wrapper relative h-screen w-screen overflow-hidden ">
				<div ref={sliderRef} className="fader relative h-4/5 sm:h-full ">
					{/*add your items in images*/}
					{images.map((src, index) => {
						return (
							<FullBackgroundSlider
								key={index}
								item={src}
								isActive={currentSlide === index}
								opacity={opacities[index]}
								index
							/>
						)
					})}
					{loaded && instanceRef.current && (
						<>
							<Arrow
								left
								onClick={(e) => {
									instanceRef.current?.prev()
								}}
							/>

							<Arrow
								right
								onClick={(e) => {
									instanceRef.current?.next()
								}}
							/>
						</>
					)}
					{loaded && instanceRef.current && (
						<div className="dots flex absolute invisible sm:visible items-center justify-center py-2.5 bottom-10 right-1/2 left-1/2 ">
							{[...Array(instanceRef.current.track.details.slides.length).keys()].map(
								(index) => {
									return (
										<button
											key={index}
											onClick={() => {
												instanceRef.current?.moveToIdx(index)
											}}
											className={
												"dot w-2 h-2 bg-gray-200 p-1 cursor-pointer border-current rounded-full my-0 mx-1.5 outline-none" +
												(currentSlide === index
													? " active sm:bg-white p-2 sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 "
													: "")
											}
										></button>
									)
								}
							)}
						</div>
					)}
				</div>
			</div>
		</>
	)
}

function Arrow(props) {
	return (
		<button
			onClick={props.onClick}
			className={`arrow sm:translate-y-1/2 items-center justify-center bottom-10 fill-white absolute sm:bottom-1/2  sm:cursor-pointer  ltr:right-6  rtl:left-6 sm:border sm:border-white focus:sm:border-0 focus:bg focus:bg-yellow-400 hover:bg-white sm:hover:bg-yellow-400  hover:border-transparent py-4 px-4 sm:rounded-full  sm:transition sm:ease-in-out sm:delay-200 sm:hover:-translate-x-1 sm:hover:scale-110 w-12 h-12  ${
				props.left
					? "arrow--left ltr:sm:left-20 rtl:sm:right-20 ltr:mr-12 rtl:ml-12 bg-white sm:bg-transparent "
					: "arrow--right ltr:sm:right-20 rtl:sm:left-20"
			}`}
		>
			<i className="relative transition hover:-translate-x-1 hover:scale-110  ">
				<svg
					className="sm:fill-white fill-black rtl:transform rtl:rotate-180"
					viewBox="0 0 30 30"
					xmlns="http://www.w3.org/2000/svg"
					height="15"
					width="15"
				>
					{props.left && (
						<path d="M13,26a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,0-1.42l9-9a1,1,0,1,1,1.42,1.42L5.41,16l8.3,8.29a1,1,0,0,1,0,1.42A1,1,0,0,1,13,26Z" />
					)}
					{props.right && (
						<path d="M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z" />
					)}
					<path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
				</svg>
			</i>
		</button>
	)
}
