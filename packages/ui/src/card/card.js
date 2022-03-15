import React from "react"
import { Link } from "@vactory/ui/link"

export const Card = ({ title, excerpt, image, url, category }) => {
	return (
		<div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
			<div className="flex-shrink-0">{image}</div>
			<div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
				<div className="flex-1">
					<p className="text-sm font-medium text-indigo-600">
						<Link href="#!" className="hover:underline">
							{category}
						</Link>
					</p>
					<Link href={url} className="block mt-2">
						<p className="text-xl font-semibold text-gray-900 dark:text-white">{title}</p>
						<p className="mt-3 text-base text-gray-500 dark:text-gray-400">{excerpt}</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
