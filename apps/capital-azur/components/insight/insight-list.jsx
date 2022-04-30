import React, { useState } from "react"
import { Card } from "@vactory/ui/card"

export const InsightList = ({ insights }) => {
	const [items, setItems] = useState(insights)

	return (
		<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
			{items.map((item, index) => {
				return (
					<a href={item.url} className="flex group block px-4 py-4" key={index}>
						<Card
							title={
								<a href={item.url}>
									<span className="group-hover:text-blue-1000 py-6 ">{item.title}</span>
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
		</div>
	)
}

export default InsightList
