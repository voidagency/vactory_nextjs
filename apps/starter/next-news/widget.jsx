import React from "react"
import get from "lodash.get"
import { Wysiwyg } from "@vactory/next/wysiwyg"
import { Link } from "@vactory/ui/link"
import classNames from "clsx"
import { normalizeDFNodes } from "./normalizer"

const CustomWidget = ({ data }) => {
	const nodes = get(data, "components.0.views.data.nodes", [])
	const title = get(data, "components.0.title", "")
	const raw_description = get(data, "components.0.description.value.#text", null)
	const description = <Wysiwyg html={raw_description} />
	const posts = normalizeDFNodes(nodes)

	return (
		<div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
				<div>
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						{title}
					</h2>
					<div className="mt-3 text-xl text-gray-500 sm:mt-4">{description}</div>
				</div>
				<div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
					{posts.map((post) => (
						<div key={post.id}>
							<div>
								<a href="#." className="inline-block">
									<span
										className={classNames(
											post.category.color,
											"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
										)}
									>
										Category
									</span>
								</a>
							</div>
							<Link href={post.url} className="block mt-4">
								<p className="text-xl font-semibold text-gray-900">{post.title}</p>
								<p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
							</Link>
							<div className="mt-6 flex items-center">
								<div className="flex-shrink-0">
									<a href="#.">
										<span className="sr-only">Author</span>
										<img
											className="h-10 w-10 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
									</a>
								</div>
								<div className="ml-3">
									<p className="text-sm font-medium text-gray-900">
										<a href="#">Author</a>
									</p>
									<div className="flex space-x-1 text-sm text-gray-500">
										<time dateTime="2020-02-12">Feb 12, 2020</time>
										<span aria-hidden="true">&middot;</span>
										<span>11 min read</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default CustomWidget
