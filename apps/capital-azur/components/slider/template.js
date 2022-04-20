import React from "react"
import { Heading } from "@vactory/ui/heading"
import { Link } from "@vactory/ui/link"
import { Layer } from "@vactory/ui/layer"
import { Container } from "@vactory/ui/container"

export const Template = ({ item }) => {
	return (
		<Container className="h-full flex items-center">
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
		</Container>
	)
}
