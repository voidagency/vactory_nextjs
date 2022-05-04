import React, { useContext } from "react"
import clsx from "clsx"
import { Link } from "@vactory/ui/link"
import { ThemeContext } from "@vactory/ui/theme-context"
import { Button } from "@vactory/ui/button"

const Badge = ({ badge, color }) => {
	return (
		<div
			className={clsx(color, "text-[0.7rem] sm:text-text-[0.8rem] px-4 py-1 rounded-2xl")}
		>
			<span>{badge}</span>
		</div>
	)
}

export const JobCard = ({
	variant = "jobCard",
	title,
	excerpt,
	category,
	location,
	date,
	url,
	urlContent,
	className,
	...props
}) => {
	const { card } = useContext(ThemeContext)
	return (
		<div className={clsx(card[variant].wrapper, className)} {...props}>
			{(category || location) && (
				<div className="flex flex-wrap sm:flex-nowrap gap-y-2 items-center gap-x-3 bg-zinc-100 lg:px-12 lg:py-4.5 md:px-10 md:py-4 sm:px-8 sm:py-4 px-6 py-4">
					{category && <Badge badge={category} color={"bg-blue-900 text-white"} />}
					{location && <Badge badge={location} color={"bg-yellow-400"} />}
				</div>
			)}
			<div className={card[variant].body}>
				{title && <h3 className={card[variant].title}>{title}</h3>}
				{date && <p className={card[variant].date}>{date}</p>}
				{excerpt && <p className={card[variant].excerpt}>{excerpt}</p>}

				{url && (
					<Link href={url} className={card[variant].link}>
						<Button
							size={"large"}
							className="mt-10 px-10 bg-blue-1000 uppercase shadow-md font-semibold"
						>
							Read more
						</Button>
					</Link>
				)}
			</div>
		</div>
	)
}

export default JobCard
