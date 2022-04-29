import { Card } from "@/components/card/card.js"
import { Button } from "@vactory/ui/button"

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
				excerpt={item.excerpt}
				urlContent={
					<Button
						Variant="primary"
						size="large"
						className="bg-blue-1000 group-hover:bg-indigo-700"
					>
						{item.urlContent}
					</Button>
				}
				image={item.image}
				url={item.url}
				category={
					<a href={item.url}>
						<span className="bg-blue-900 rounded-md px-3 py-1 mx-1 text-white">
							{item.category[0]}
						</span>
						<span className="bg-red-500 rounded-md px-3 py-1 mx-1 text-white">
							{item.category[1]}
						</span>
					</a>
				}
				className=""
			/>
		</a>
	)
}
