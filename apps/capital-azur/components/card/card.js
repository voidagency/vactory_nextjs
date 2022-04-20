import React from "react"
import { Link } from "@vactory/ui/link"

const Card = ({ title, excerpt, image, urlTag, url, urlContent, category, ...props }) => {
	return (
		<div
			className="flex flex-row h-80 rounded-lg shadow-lg overflow-hidden bg-white text-black lrt:text-left rtl:text-right"
			{...props}
		>
			<div className="flex-shrink-0 h-full w-1/3">
				{image}
				<div className="flex top-0"></div>
			</div>
			<div className="px-4 py-3 w-2/3 flex flex-col z-10">
				<Link href={url} className="block">
					<>
						{title && (
							<h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
						)}
					</>
				</Link>
				<div>
					{urlTag ? (
						<Link href={urlTag} className="text-sm font-medium text-indigo-600">
							{category}
						</Link>
					) : (
						<p className="text-sm font-medium text-indigo-600">{category}</p>
					)}
				</div>
				<Link href={url} className="block">
					<>
						{
							<p className="mt-3 text-base text-gray-500 dark:text-gray-400 mb-6">
								{excerpt}
							</p>
						}
					</>
				</Link>
				{url && urlContent && (
					<Link href={url} className="text-primary">
						{urlContent}
					</Link>
				)}
			</div>
		</div>
	)
}

export { Card }
