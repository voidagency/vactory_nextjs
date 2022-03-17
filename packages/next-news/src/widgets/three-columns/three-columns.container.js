import React from "react"
import get from "lodash.get"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import { Link } from "@vactory/ui/link"
import { Button } from "@vactory/ui/button"
import { NewsCard } from "../../components/card"
import { normalizeDFNodes } from "../../lib/normalizer"

const ThreeColumnsContainer = ({ data }) => {
	const nodes = get(data, "components.0.views.data.nodes", [])
	const title = get(data, "components.0.title", "")
	const raw_description = get(data, "components.0.description.value.#text", null)
	const description = <Wysiwyg html={raw_description} />
	const link = get(data, "components.0.link.url", null)
	const link_label = get(data, "components.0.link.title", "")
	const posts = normalizeDFNodes(nodes)

	return (
		<div className="relative bg-gray-50 dark:bg-gray-900 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div className="absolute inset-0">
				<div className="bg-white dark:bg-black h-1/3 sm:h-2/3" />
			</div>
			<div className="relative max-w-7xl mx-auto">
				<div className="text-center">
					{title && (
						<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
							{title}
						</h2>
					)}
					{raw_description.length > 0 && (
						<div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
							{description}
						</div>
					)}
				</div>
				<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					{posts.map((post) => (
						<React.Fragment key={post.id}>
							<NewsCard {...post} />
						</React.Fragment>
					))}
				</div>
				<div className="flex justify-center mt-12">
					<Link href={link}>
						<Button>{link_label}</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ThreeColumnsContainer
