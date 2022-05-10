import React, { useState } from "react"
import { Card } from "@vactory/ui/card"
import { Container } from "@vactory/ui/container"

export const InsightList = ({ insights }) => {
	const [items, setItems] = useState(insights)

	return (
		<Container className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full">
			{items.map((item, index) => {
				return (
					<a
						href={item.url}
						className="flex flex-col sm:flex-row group block px-4 py-4 w-full"
						key={index}
					>
						<Card
							title={
								<a href={item.url}>
									<span className="group-hover:text-blue-1000 py-6 font-bold ">
										{item.title}
									</span>
								</a>
							}
							urlContent={item.urlContent}
							image={item.image}
							url={item.url}
							category={
								item.category && (
									<a href={item.url}>
										<span className="bg-blue-900 rounded-md px-2 py-1">
											{item.category}
										</span>
									</a>
								)
							}
							className="max-w-sm"
						/>
					</a>
				)
			})}
		</Container>
	)
}

export default InsightList
