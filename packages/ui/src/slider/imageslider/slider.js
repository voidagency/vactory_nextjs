import React, { useState } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react.es" // import from 'keen-slider/react.es' for to get an ES module
//keep this css file just for the icon next and previous to change them after
//import "./styles.css"
import { FullImageSlider } from "./fullImageSlider"

const images = [
	"https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
	"https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
	"https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
	"https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
]
export const ImageSlider = (items) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [loaded, setLoaded] = useState(false)
	const [sliderRef, instanceRef] = useKeenSlider({
		loop: true,
		rtl: true,
		breakpoints: {
			"(min-width: 200px)": {
				slides: { perView: 2.5, spacing: 25, origin: "center" },
			},
			"(min-width: 768px)": {
				slides: { perView: 2, spacing: 25, origin: "center" },
			},
			"(min-width: 900px)": {
				slides: { perView: 3, spacing: 25, origin: "center" },
			},
		},
		defaultAnimation: {
			duration: 2000,
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
			<div className="relative w-screen h-96  items-center justify-center">
				<div
					className="navigation-wrapper relative  justify-center  h-4/5 sm:h-full md:h-4/5 lg:h-full w=full sm:top-0  sm:px-20 md:px-48 overflow-hidden  
"
				>
					<div ref={sliderRef} className="keen-slider relative w=full h-full">
						{images.map((n, index) => {
							return (
								<FullImageSlider key={index} item={n} isActive={currentSlide === index} />
							)
						})}
					</div>
					{loaded && instanceRef.current && (
						<>
							<Arrow left onClick={(e) => instanceRef.current?.prev()} />

							<Arrow right onClick={(e) => instanceRef.current?.next()} />
						</>
					)}
				</div>
				{loaded && instanceRef.current && (
					<div className="dots flex items-center justify-center py-2.5 -bottom-10 right-1/2 left-1/2 ">
						{[...Array(instanceRef.current.track.details.slides.length).keys()].map(
							(idx) => {
								return (
									<button
										key={idx}
										onClick={() => {
											instanceRef.current?.moveToIdx(idx)
										}}
										className={
											"dot w-2 h-2 bg-gray-400 p-1 cursor-pointer border-current rounded-full my-0 mx-1.5 focus:outline-none" +
											(currentSlide === idx
												? " active bg-yellow-400 p-2 sm:transition sm:ring-2 sm:ring-slate-50 sm:ease-in-out sm:delay-100 "
												: "")
										}
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

function Arrow(props) {
	return (
		<button
			onClick={props.onClick}
			className={`arrow invisible md:visible sm:translate-y-1/2 items-center justify-center bottom-10 fill-white absolute sm:bottom-1/2  sm:cursor-pointer  sm:border sm:border-black focus:sm:border-0 focus:bg focus:bg-yellow-400 hover:bg-white sm:hover:bg-yellow-400  hover:border-transparent py-4 px-4 sm:rounded-full  sm:transition sm:ease-in-out sm:delay-200 sm:hover:-translate-x-1 sm:hover:scale-110 w-12 h-12  ${
				props.left
					? "arrow--left ltr:md:left-32 rtl:right-32"
					: "arrow--right ltr:md:right-32 rtl:left-32"
			} `}
		>
			<i className="relative transition ease-in-out delay-200 hover:-translate-x-1 hover:scale-110">
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
