import React, { useContext } from "react"
import clsx from "clsx"
import { Link } from "@vactory/ui/link"

const date = {
	debutDay: "22",
	debutMonth: "May",
	finDay: "30",
	finMonth: "May",
}

const Card = ({
	variant = "default",
	title,
	excerpt,
	image,
	urlTag,
	url,
	urlContent,
	icon,
	className,
	category,
	...props
}) => {
	return (
		<div
			className="flex flex-col md:flex-row h-[600px] md:h-80 rounded-lg shadow-lg overflow-hidden bg-white text-black lrt:text-left rtl:text-right"
			{...props}
		>
			<div className="flex-shrink-0 h-1/2 w-full md:h-full md:w-2/5 overflow-hidden">
				{image}
				<div>
					{date && (
						<div className="flex flex-col relative -top-72 left-3/4 w-16 h-32 bg-red-500 rounded-lg text-white font-semobold items-center justify-center">
							<span className="pt-2">{date.debutDay}</span>
							<span>{date.debutMonth}</span>
							<span>-</span>
							<span>{date.finDay}</span>
							<span className="pb-2">{date.finMonth}</span>
						</div>
					)}
				</div>
			</div>

			<div className="px-4 py-3 h-1/2 md:w-2/3 flex flex-col">
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
