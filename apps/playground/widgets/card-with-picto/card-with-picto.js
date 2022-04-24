import React from "react"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { cards } from "./data"
import { Link } from "@vactory/ui/link"

export const CardPicto = ({ title, description, image, url, index, ...props }) => {
	const Component = url ? Link : div
	return (
		<div
			className="bg-white flex flex-col items-center text-center pt-[99px] pb-6 px-7 shadow-[0px_2px_34px_rgba(155,162,170,0.11)] relative"
			{...props}
		>
			<span className="text-white w-8 h-8 rounded-full bg-primary-500 absolute left-8 top-8 flex items-center justify-center text-base">
				{index}
			</span>
			{image && <div className="h-20 mx-auto mb-5">{image}</div>}
			<div className="">
				<Component href={url}>
					<Heading level={6} className="text-gray-900 mb-6">
						{title}
					</Heading>
					<p className="text-gray-500 text-base leading-6 font-light">{description}</p>
				</Component>
			</div>
		</div>
	)
}

export const CardWithPicto = ({ title, items = cards, ...props }) => {
	return (
		<Container className="py-14" {...props}>
			<Heading level="3" className="text-center mb-9">
				{title}
			</Heading>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{items.map((item, index) => {
					return (
						<CardPicto
							key={item.id}
							index={index + 1}
							variant="chaibi"
							title={item.title}
							description={item.excerpt}
							url="/"
							image={<img src={item.icon} className="mx-auto h-20" alt={item.iconalt} />}
						/>
					)
				})}
			</div>
		</Container>
	)
}

export default CardWithPicto
