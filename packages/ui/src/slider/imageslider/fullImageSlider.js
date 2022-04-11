import React from "react"
//import { Button } from "@vactory/ui/button"
import { Link } from "@vactory/ui/link"
//import { Wysiwyg } from "@vactory/next/wysiwyg"

export const FullImageSlider = ({ item, isActive }) => {
	const profession = item.profession
	const link = item.link
	const link_label = item.link_label

	return (
		<Link
			className={`${!isActive ? "transition scale-y-90 md:transform-none" : ""} `}
			href={"https://www.albaridbank.ma/fr"}
		>
			<div
				className="keen-slider__slide number-slide relative group  bg-fixed h-full  max-h-10 rounded-xl"
				style={{ backgroundImage: `url(${item})` }}
			>
				<div className="relative top-3/4 sm:top-3/4 md:top-3/4">
					<div className="text-center" textAlign="center">
						{/*Link && Link_label && profession*/}
						<span
							className="inline-flex bottom-10 px-3 py-2 text-xl leading-4 text-white font-medium rounded-md sm:transition sm:ease-in-out sm:delay-150 sm:group-hover:-translate-y-4 sm:group-hover:text-yellow-500"
							href={link}
						>
							{/*<Wysiwyg html={profession}/> */}
							{profession}Profession
						</span>
					</div>
				</div>
			</div>
		</Link>
	)
}
