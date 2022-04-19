import React from "react"
import { Heading } from "@vactory/ui/heading"
import { Link } from "@vactory/ui/link"
import { Layer } from "@vactory/ui/layer"

export const Template = ({ item, isActive }) => {
	return (
		<Layer
			isShow={isActive}
			modal={false}
			overlayBackground="bg-blue-500"
			overlayOpacity="bg-opacity-40"
			overlay={false}
			position="bottom-center"
		>
			<div className="bg-white  px-8 py-10 w-[450px] h-[300px] rounded-xl">
				<Heading
					level={2}
					className="text-left mb-3 ml-8 before:content-['-__'] before:text-indigo-500"
				>
					{item.title}
				</Heading>
				<p className="text-left mb-2 ">{item.description}</p>
				<Link variant="permalink" href={item.link}>
					GERER VOS COMPTES
				</Link>
			</div>
		</Layer>
	)
}
