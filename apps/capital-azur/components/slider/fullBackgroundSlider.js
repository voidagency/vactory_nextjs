import React from "react"
import { Layer } from "@vactory/ui/layer"

export const FullImageSlider = ({ item, isActive }) => {
	return (
		<div
			className="keen-slider__slide number-slide h-full w-full  rounded-xl bg-indigo-400"
			style={{ backgroundImage: `url(${item})` }}
		>
			<div className="flex left-1/2">
				<Layer
					isShow={isActive}
					modal={false}
					overlayBackground="bg-blue-500"
					overlayOpacity="bg-opacity-40"
					overlay={false}
					position="bottom-center"
				>
					<div className="bg-white text-center px-8 py-10 w-[200px]">
						This is the layer injected on App.js
					</div>
				</Layer>
			</div>
		</div>
	)
}
