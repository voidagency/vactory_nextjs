import React from "react"
import { Layer } from "@vactory/ui/layer"
import { Heading } from "@vactory/ui/heading"
import { Link } from "@vactory/ui/link"

export const FullImageSlider = ({ item, isActive }) => {
	return (
		<div
			className="keen-slider__slide number-slide z-0 h-full w-full  rounded-xl"
			style={{ backgroundImage: `url(${item.image})` }}
		>
			<Layer
				isShow={isActive}
				modal={false}
				overlayBackground="bg-blue-500"
				overlayOpacity="bg-opacity-40"
				overlay={false}
				position="bottom-center"
			>
				<div className="bg-white  px-8 py-10 w-[450px] h-[300px]">
					<Heading
						level={2}
						className="text-left mb-3 ml-8 before:content-['-__'] before:text-indigo-500"
					>
						{item.title}
					</Heading>
					<p className="text-left mb-2 ">{item.description}</p>
					<Link variant="permalink" href={item.link}>
						En savoir plus
					</Link>
				</div>
			</Layer>
		</div>
	)
}
