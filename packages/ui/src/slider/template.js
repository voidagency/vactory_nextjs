import React from "react"
import { Heading } from "@vactory/ui/heading"

export const Template = ({}) => {
	// isActive to show layer or div
	return (
		<div className="bg-white  w-[200px] h-[100px]">
			<Heading
				level={2}
				className="text-left mb-3 ml-8 before:content-['-__'] before:text-indigo-500"
			>
				{/* item.title  */} template Example
			</Heading>
		</div>
	)
}
