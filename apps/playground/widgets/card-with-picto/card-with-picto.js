import React from "react"
import { Container } from "@vactory/ui/container"
import { Heading } from "@vactory/ui/heading"
import { Card } from "@vactory/ui/card"
import { cards } from "./data"
import { Link } from "@vactory/ui/link"

export const CardPicto = ({ title, description, image, url, index, ...props }) => {
	const Component = url ? Link : div
	return (
		<div
			className="bg-white flex flex-col items-center text-center pt-[77px] pb-6 px-7 shadow relative"
			{...props}
		>
			<span className="text-white w-8 h-8 rounded-full bg-primary-500 absolute left-8 top-8 flex items-center justify-center text-base">
				{index}
			</span>
			{image && <div className="h-20 mx-auto mb-5">{image}</div>}
			<div className="">
				<Component href={url}>
					<h3 className="text-gray-900 text-xl leading-[30px] font-semibold mb-6">
						{title}
					</h3>
					<p className="text-[#667085] text-base leading-6 font-light">{description}</p>
				</Component>
			</div>
		</div>
	)
}

export const CardWithPicto = ({ title, items = cards, ...props }) => {
	return (
		<Container className="py-14" {...props}>
			<Heading level="2" className="text-center mb-9">
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
							image={<img src={item.icon} className="mx-auto" alt={item.iconalt} />}
						/>
					)
				})}
			</div>
		</Container>
	)
}

export default CardWithPicto
