import { Card } from "@vactory/ui/card"

export const CardTemplate = ({ item, variant }) => {
	return (
		<a href={item.url} className="group block px-4 py-4">
			<Card
				variant={variant}
				title={
					<a href={item.url}>
						<span>{item.title}</span>
					</a>
				}
				urlContent={item.urlContent}
				image={item.image}
				url={item.url}
				category={
					<a href={item.url}>
						<span className="bg-blue-900 rounded-md px-2 py-1 text-white">
							{item.category}
						</span>
					</a>
				}
				className=""
			/>
		</a>
	)
}
